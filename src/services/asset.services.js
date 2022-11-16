const Assets = require("../models/asset.model");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const { success, error } = require("../utility/base.response");
const { ADD, DELETE, ANDROID, IOS, WEB } = require("./../utils/constants");
var fs = require("fs");

async function uploadAsset(req) {
  return new Promise(async (res, rej) => {
    console.log("upload call");
    let isExists = await Assets.findOne({ name: req.body.name });
    if (isExists) {
      res(error("apis.uploadAsset.nameAlreadyExists"));
      return;
    }
    var asset = new Assets();
    asset.name = req.body.name;
    asset.type = req.body.type;
    // asset.projectId = req.body.projectId;
    asset.id = req.body.id;
    asset.folderType = req.body.folderType;
    asset.platform = req.body.platform;
    asset.canvasUrl =
      req.body.platform +
      "/" +
      "drawable" +
      "-" +
      req.body.folderType +
      "/" +
      req.file.filename;
    if (req.body.platform === ANDROID) {
      asset.url = req.body.name;
    } else if (req.body.platform === IOS || req.body.platform === WEB) {
      asset.url = req.body.platform + "/" + req.file.filename;
    }
    asset
      .save()
      .then((result) => {
        res(success("apis.uploadAsset.success"));
      })
      .catch((err) => {
        rej(error("apis.uploadAsset.failed"));
      });
  });
}

async function deleteAsset(req) {
  return new Promise((res, rej) => {
    Assets.deleteOne({
      _id: ObjectId(req.id),
    })
      .then((result) => {
        if (req.url) {
          const lastSegment = req.url.split("/").pop();
          const path = process.env.DISK_STORAGE_URL + lastSegment;
          fs.unlink(path, (err) => {
            if (err) {
              console.error(err);
              return;
            }
          });
        }
        res(success("apis.getAssets.success", result));
      })
      .catch((err) => {
        rej(error("apis.getAssets.failed"));
      });
  });
}

async function getAssets(req) {
  return new Promise((res, rej) => {
    let query = {};
    query.platform = req.platform;
    query.folderType = req.folderType;
    query.projectId = ObjectId(req.projectId);
    Assets.find(query)
      .then((result) => {
        res(success("apis.getAssets.success", result));
      })
      .catch((err) => {
        rej(error("apis.getAssets.failed"));
      });
  });
}

async function assetManagement(req) {
  if (req.action === ADD) {
    // addAsset
    return uploadAsset(req);
  }
  if (req.action === DELETE) {
    // deleteAsset
    return deleteAsset(req);
  }
}

async function deleteAssetsByProjectID(req) {
  return new Promise((res, rej) => {
    Assets.deleteMany({
      projectId: ObjectId(req.projectId),
    })
      .then((result) => {
        res(success("apis.deleteAssetsByProjectID.success"));
      })
      .catch((err) => {
        rej(error("apis.deleteAssetsByProjectID.failed"));
      });
  });
}

module.exports = {
  getAssets,
  assetManagement,
  uploadAsset,
  deleteAsset,
  deleteAssetsByProjectID,
};
