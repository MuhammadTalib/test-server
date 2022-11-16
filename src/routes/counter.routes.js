const counter = require("../services/counter.service");
module.exports = function (app) {
  var express = require("express");
  var router = express.Router();

  router.post("/next", async (req, res) => {
    console.log(req.body);
    let resposne = await counter.next(req);
    res.json(resposne);
  });

  app.use("/counter", router);
};
