module.exports = function (app) {
  var express = require("express");
  var router = express.Router();
  let FTLogin = require("../services/fund.login.services");

  router.post("/login", async (req, res) => {
    let response = await FTLogin.Login(req);
    res.send(response);
  });
  app.use("/security", router);
};
