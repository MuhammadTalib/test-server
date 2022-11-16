module.exports = function (app) {
  var express = require("express");
  var router = express.Router();

  let Service = require("../services/services");

  router.post("/getServices", async (req, res) => {
    let response = await Service.getServices(req.body);
    res.send(response);
  });

  app.use("/service", router);
};
