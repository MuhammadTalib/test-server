module.exports = function (app) {
  var express = require("express");
  var router = express.Router();

  let themeService = require("../services/theme.services");

  router.post("/getThemes", async (req, res) => {
    let response = await themeService.allThemes(req.body);
    res.send(response);
  });

  app.use("/theme", router);
};
