const express = require("express");
const app = express();
const router = express.Router();
const cors = require("cors");
const passport = require("passport");
const auth = require("../config/auth").strategy();
const localStrategy = require("passport-local");
const User = require("../models/user.model");
const i18n = require("i18n");
const { error } = require("../utility/base.response");
const { encrypt } = require("../services/crypto");
const CryptoJS = require("crypto-js");
const { PRODUCTION } = require("./../utils/constants");
const { generateAuthHeader } = require("../config/generateAuthHeader");

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  // res.setHeader("Access-Control-Allow-Origin", "*");

  // // Request headers you wish to allow
  // res.setHeader(
  //   "Access-Control-Allow-Headers",
  //   "Origin, X-Requested-With, Content-Type, Accept"
  // );

  // Pass to next layer of middleware
  next();
});
// i18n
i18n.configure({
  locales: ["en", "de"],
  directory: `${__dirname}/locales`,
  defaultLocale: "en",
  objectNotation: true,
});
app.use(i18n.init);

app.use(express.json({ limit: "10mb", extended: true }));
app.use(
  express.urlencoded({ limit: "10mb", extended: true, parameterLimit: 50000 })
);
app.use(cors());

// app.use(function (req, res, next) {
//   let json = res.json;
//   res.json = async function (body) {
//     try {
//       let hmac = generateAuthHeader({
//         headers: req.headers,
//         url: req.originalUrl,
//         method: req.method.toLowerCase(),
//         appId: req.headers.apiKey,
//         data: JSON.stringify(body),
//         channelKey: req.headers["channel_key"],
//       });
//       body = {
//         body,
//         hmac,
//       };
//     } catch (err) {
//       console.log("err-->", err);
//     }

//     if (process.env.NODE_ENV === PRODUCTION) {
//       let encryptedRespopnse = encrypt(req.headers.apiKey, body);
//       json.call(this, encryptedRespopnse);
//     } else {
//       json.call(this, body);
//     }
//   };
//   next();
// });

app.use(function (req, res, next) {
  process.on("unhandledRejection", (err) => {
    console.log("err--->", err, err.code);
    try {
      if (err && err.code !== undefined) {
        return res.send(err);
      }
      return res.status(500).send(error("apis.global.error", err?.message));
    } catch (catchErr) {
      return res
        .status(500)
        .send(error("apis.global.error", catchErr?.message));
    }
  });
  next();
});

app.use(auth.initialize());
passport.use(new localStrategy(User.authenticate()));
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.listen(process.env.PORT, function () {
  console.log("Node server is running... on", process.env.PORT);
});

module.exports = app;
