const AuthorizationConfiguration = require("../models/authorization.configuration.model");
const { success, error } = require("../utility/base.response");
const ObjectId = require("mongoose").Types.ObjectId;
const { ADD, EDIT, DELETE } = require("./../utils/constants");

async function addAuthorizationConfiguration(req) {
  return new Promise(async (res, rej) => {
    console.log("req", req);
    let authConf = new AuthorizationConfiguration(req);
    let result = authConf.save();
    if (result) {
      res(success("apis.addAuthorizationConfiguration.success"));
    } else {
      rej(error("apis.addAuthorizationConfiguration.failed"));
    }
  });
}

async function editAuthorizationConfiguration(req) {
  return new Promise(async (res, rej) => {
    let AuthorizationConfiguration = await AuthorizationConfiguration.findOne({
      _id: ObjectId(req._id),
    });
    if (AuthorizationConfiguration) {
      AuthorizationConfiguration.name = req.name;
      AuthorizationConfiguration.status = req.status;
      AuthorizationConfiguration.headers = req.headers;
      let result = await AuthorizationConfiguration.save();
      if (result) {
        res(success("apis.editHeadersCollection.success"));
      } else {
        rej(error("apis.editHeadersCollection.failed"));
      }
    }
  });
}

async function deleteAuthorizationConfiguration(req) {
  return new Promise((res, rej) => {
    AuthorizationConfiguration.deleteOne({ _id: ObjectId(req._id) })
      .then((result) => {
        res(success("apis.deleteHeadersCollection.success"));
      })
      .catch((err) => {
        rej(error("apis.deleteHeadersCollection.failed"));
      });
  });
}

async function getAuthorizationConfigurations(req) {
  return new Promise((res, rej) => {
    AuthorizationConfiguration.find()
      .then((result) => {
        res(success("apis.getHeadersCollection.success", result));
      })
      .catch((err) => {
        rej(error("apis.getHeadersCollection.failed"));
      });
  });
}

async function authorizationConfigurationManagement(req) {
  if (req.action === ADD) {
    // addTrigger
    return addAuthorizationConfiguration(req);
  }
  if (req.action === EDIT) {
    // editTrigger
    return editAuthorizationConfiguration(req);
  }
  if (req.action === DELETE) {
    // deleteTrigger
    return deleteAuthorizationConfiguration(req);
  }
}

module.exports = {
  getAuthorizationConfigurations,
  authorizationConfigurationManagement,
};
