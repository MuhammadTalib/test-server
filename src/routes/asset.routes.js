const { ANDROID, IOS, WEB } = require("../utils/constants");

module.exports = function (app) {
  var express = require("express");
  var router = express.Router();
  var assetsService = require("../services/asset.services");
  var multer = require("multer");

  var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      let data = {};
      Object.assign(data, { newData: req.body });
      let path = process.env.DISK_STORAGE_URL;
      if (req.body.platform === ANDROID) {
        path += "/" + req.body.platform;
        path += "/" + "drawable" + "-" + req.body.folderType;
      }
      if (req.body.platform === IOS || req.body.platform === WEB) {
        path += "/" + req.body.platform;
      }
      cb(null, path);
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  });

  var upload = multer({ storage: storage });

  router.post("/getAssets", async (req, res) => {
    let response = await assetsService.getAssets(req.body);
    res.send(response);
  });

  router.post("/upload", upload.single("file"), async (req, res) => {
    let response = await assetsService.uploadAsset(req);
    res.send(response);
  });

  router.post("/assetManagement", async (req, res) => {
    let response = await assetsService.assetManagement(req.body);
    res.send(response);
  });

  router.get("/test", async (req, res) => {
    res.send({ body: "body" });
  });

  app.use("/asset", router);
};
