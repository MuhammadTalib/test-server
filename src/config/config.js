//load configuration from .env file
const dotenv = require("dotenv");
require("./auth").strategy();
const { authenticate, authenticateHmac } = require("./auth");
const { logUserActivity, checkInSecureUrls } = require("../utils/utils");
const CryptoJS = require("crypto-js");
const { PRODUCTION } = require("./../utils/constants");
const { error } = require("../utility/base.response");

//Step 1 : Load configuration
const envConfigurations = dotenv.config();
if (envConfigurations.error) {
  throw envConfigurations.error;
}

//Step 2 : connect to database
let db = require("./database.config");
const Channels = require("../models/channel.model");

const decryptPayoad = async (req, res, next) => {
  let appId = req.headers["channel_key"];
  let response = await Channels.findOne({ id: appId });
  try {
    if (!Boolean(response)) {
      console.log("Decrypt payload error", "channel key not found");
      res.status(401).json(error("apis.global.unauthorized"));
      return;
    }
    let apiKey = response.apiKey;
    req.headers.apiKey = apiKey;
    if (process.env.NODE_ENV === PRODUCTION) {
      if (req.body.payload) {
        let bytes = CryptoJS.AES.decrypt(req.body.payload, apiKey);
        let data = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        req.body = data;
      }
    }

    next();
  } catch (err) {
    console.log("Decrypt payload error", err);
    res.status(401).json(error("apis.global.unauthorized"));
    return;
  }
};

db.connect(() => {
  //Step 3 : Expose rest through express
  const app = require("../server/server");

  app.use("*", async (req, res, next) => {
    // if (checkInSecureUrls(req.baseUrl)) {
    //   logUserActivity(req);
    next();
    //   return;
    // } else authenticate(req, res, next);
  });

  //Step 4 : Register the routes(rest resources)
  require("../routes/routes")(app);

  //Step 5 : Register the routes(rest resources)
  require("./jwt.config");

  //Step 6 : Register the routes(rest resources)
  // require("./passport.config")(app);

  //Step 7 : Register the routes(rest resources)
  require("./auth");
});
