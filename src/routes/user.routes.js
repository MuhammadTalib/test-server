module.exports = function (app) {
  var express = require("express");
  var router = express.Router();
  let userService = require("../services/user.services");

  router.post("/logout", async (req, res) => {
    let response = await userService.logout(req);
    res.send(response);
  });

  router.post("/refreshToken", async (req, res) => {
    let response = await userService.refreshToken(req.body);
    res.send(response);
  });

  app.use("/security", router);
};
