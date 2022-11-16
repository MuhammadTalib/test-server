let User = require("../models/user.model");
let Token = require("../models/tokens.model");
const jwt = require("jwt-simple");
const config = require("../config/jwt.config");
var moment = require("moment");
const UserActivity = require("../models/user.activity.log.model");
const Constants = require("../utils/constants");
const { success, error } = require("../utility/base.response");

async function logout(req) {
  return new Promise((res, rej) => {
    User.findOne({
      username: req.body.username,
    })
      .then((result) => {
        if (!result || !result.username) {
          res(error("apis.logout.failed"));
        } else {
          const content = {};
          const lastLogoutTime = Date.now();
          result.sessionAuthorized = false;
          result.lastLogoutTime = lastLogoutTime;
          let modelUser = new User(result);
          modelUser.save().then((resofSave) => {
            content.lastLogoutTime = moment(resofSave.lastLogoutTime).format(
              process.env.SYSTEM_DATE_TIME_FORMAT
            );
            content.lastLoginTime = moment(resofSave.lastLoginTime).format(
              process.env.SYSTEM_DATE_TIME_FORMAT
            );
            var sessionDuration =
              new Date(resofSave.lastLogoutTime) -
              new Date(resofSave.lastLoginTime);
            sessionDuration = sessionDuration;
            var secs = Math.floor((sessionDuration / 1000) % 60)
              .toString()
              .padStart(2, 0);
            var mins = Math.floor((sessionDuration / (1000 * 60)) % 60)
              .toString()
              .padStart(2, 0);
            var hours = Math.floor((sessionDuration / (1000 * 60 * 60)) % 24)
              .toString()
              .padStart(2, 0);
            var ld = `${hours}:${mins}:${secs}`;
            content.lastSessionDuration = ld;
            resofSave.lastSessionDuration = ld;

            userActivities(req).then((activities) => {
              content.activities = JSON.parse(JSON.stringify(activities));
              resofSave.save((respo) => {
                //clear token database agiant user
                Token.deleteOne({ userId: result._id }).then((res) => {});
                res(success("apis.logout.success", content));
              });
            });
          });
        }
      })
      .catch((err) => {
        console.log("err", err);
        res(error("apis.logout.failed"));
      });
  });
}

async function userActivities(req) {
  let query = {
    sessionId: req.body.user.sessionId,
    type: Constants.LOG_TYPE_USER,
  };
  let activities = await UserActivity.find(query)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return "";
    });
  return activities;
}

async function refreshToken(req) {
  return new Promise((res, rej) => {
    let username = req.username;
    var payload = {
      username: username,
      expire: Date.now() + Number(process.env.tokenExpireTime), //2 mins,
    };
    var token = jwt.encode(payload, config.jwtSecret);
    var refreshPayload = {
      username: username,
      expire: Date.now() + Number(process.env.tokenRefresExpireTime), //4 mins,
    };
    var refreshtoken = jwt.encode(refreshPayload, config.jwtSecret);
    const content = {
      TET: payload.expire,
      token,
      refreshToken: refreshtoken,
      refreshTET: refreshPayload.expire,
    };

    //update token in tokenSchema against user.
    res(success("apis.refreshToken.success", content));
  });
}

module.exports = {
  logout,
  userActivities,
  refreshToken,
};
