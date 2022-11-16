const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const Schema = mongoose.Schema;
var moment = require("moment");

const SystemComponentVersionSchema = new Schema(
  {
    type: {
      type: Number,
    },
    version: {
      type: String,
      trim: true,
    },
    isLatest: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);
SystemComponentVersionSchema.methods.toJSON = function () {
  const systemComp = this;
  const systemCompObject = systemComp.toObject();

  systemCompObject.createdAt = systemCompObject.createdAt
    ? moment(systemCompObject.createdAt).format(process.env.SYSTEM_DATE_FORMAT)
    : "N/A";
  systemCompObject.updatedAt = systemCompObject.updatedAt
    ? moment(systemCompObject.updatedAt).format(process.env.SYSTEM_DATE_FORMAT)
    : "N/A";

  return systemCompObject;
};

SystemComponentVersionSchema.plugin(passportLocalMongoose);
const SystemComponentVersion = mongoose.model(
  "SystemComponentVersion",
  SystemComponentVersionSchema
);

module.exports = SystemComponentVersion;
