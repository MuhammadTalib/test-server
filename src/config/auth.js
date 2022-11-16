const passport = require("passport");
const passportJWT = require("passport-jwt");
const User = require("../models/user.model");
const Token = require("../models/tokens.model");
const CryptoJS = require("crypto-js");
const Base64 = require("crypto-js/enc-base64");
const { logUserActivity } = require("../utils/utils");
const cfg = require("./jwt.config");
const Channels = require("../models/channel.model");
const {
  generateSignatureString,
  createHmacSHA256,
  matchSignature,
} = require("./generateAuthHeader");
const { success, error } = require("../utility/base.response");
const ExtractJwt = passportJWT.ExtractJwt;
const Strategy = passportJWT.Strategy;
const params = {
  secretOrKey: cfg.jwtSecret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

module.exports = {
  strategy: function () {
    var strategy = new Strategy(params, function (payload, done) {
      User.findOne(
        {
          username: payload.username,
        },
        function (err, user) {
          if (err) {
            return done(new Error("User Not Found"), null);
          } else if (!user.sessionAuthorized) {
            return done(
              new Error("Your session is expired, Please login"),
              null
            );
          } else if (payload.expire <= Date.now()) {
            return done(null, false, { code: 0, message: "Token Expired!" });
          } else {
            return done(null, user);
          }
        }
      );
    });
    passport.use(strategy);
    return {
      initialize: function () {
        return passport.initialize();
      },
    };
  },
  authenticate: (req, res, next) => {
    passport.authenticate("jwt", cfg.jwtSession, async (err, user, info) => {
      if (user) {
        let Authorization = req.headers.authorization;

        req.body.user = user;
        logUserActivity(req);
        next();
        return;
      }
      logUserActivity(req);
      return res.status(401).send(error("apis.global.tokenExpired"));
    })(req, res, next);
  },
  authenticateHmac: async (req, res, next) => {
    try {
      //Step 2
      try {
        if (
          String(req.headers["content-type"]).includes("multipart/form-data")
        ) {
          next();
        }
        let [appId, signature, nonce, timestamp] = req.body["hmac"]
          .replace("amx ", "")
          .split(":");

        if (!appId || !signature || !nonce || !timestamp) {
          res.status(401).json(error("apis.global.unauthorized"));
          return;
        }

        //Step 3

        //Api key is injected in header while decrypting payload
        let apiKey = req.headers.apiKey;

        //step 4 check for replay request

        // Step 5
        let string = generateSignatureString({
          url: req.originalUrl,
          method: req.method.toLowerCase(),
          data: JSON.stringify(req.body.body),
          nonce,
          timestamp,
          appId,
        });

        //Step 6
        let signatureGenerated = createHmacSHA256(string, apiKey);

        if (matchSignature(signature, signatureGenerated)) {
          req.body = req.body.body;
          next();
        } else {
          res.status(401).json(error("apis.global.unauthorized"));
          return;
        }
      } catch (err) {
        console.log("errr", err);
      }
    } catch (err) {
      res.status(401).json(error("apis.global.unauthorized"));
      return;
    }
  },
};
