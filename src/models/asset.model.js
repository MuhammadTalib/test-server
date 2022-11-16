const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AssetsSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      minlength: 3,
    },
    url: {
      type: String,
      trim: true,
      minlength: 5,
    },
    type: {
      type: String,
      trim: true,
      minlength: 2,
    },
    id: {
      type: String,
    },
    folderType: {
      type: String,
    },
    platform: {
      type: String,
    },
    canvasUrl: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

AssetsSchema.methods.toJSON = function () {
  const asset = this;
  const assetObject = asset.toObject();
  assetObject.uri = process.env.LOCAL_ASSETS_URL + assetObject.url;
  assetObject.url = process.env.LOCAL_ASSETS_URL + assetObject.url;
  assetObject.canvasUrl = process.env.LOCAL_ASSETS_URL + assetObject.canvasUrl;

  return assetObject;
};
const Assets = mongoose.model("Assets", AssetsSchema);

module.exports = Assets;
