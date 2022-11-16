module.exports = function (app) {
  var express = require("express");
  var router = express.Router();

  let authorizationConfiguration = require("../services/authorization.configuration.services");

  router.post("/getAuthorizationConfigurations", async (req, res) => {
    let response =
      await authorizationConfiguration.getAuthorizationConfigurations(req.body);
    res.send(response);
  });

  router.post("/authorizationConfigurationManagement", async (req, res) => {
    let response =
      await authorizationConfiguration.authorizationConfigurationManagement(
        req.body
      );
    res.send(response);
  });

  app.use("/authorizationConfiguration", router);
};
