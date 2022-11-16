module.exports = function (app) {
  var express = require("express");
  var router = express.Router();

  let previewService = require("../services/preview.services");

  router.post("/getPreview", async (req, res) => {
    let response = await previewService.getPreview(req.body);
    res.send(response);
  });

  router.post("/getPreviewById", async (req, res) => {
    let response = await previewService.getPreviewById(req.body);
    res.send(response);
  });

  router.post("/previewManagement", async (req, res) => {
    let response = await previewService.previewManagement(req.body);
    res.send(response);
  });

  app.use("/preview", router);
};
