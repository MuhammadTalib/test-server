const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const Schema = mongoose.Schema;
var moment = require("moment");

const SystemComponentSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },
    icon: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
    group: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
    configuration: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
    Documentation: {
      type: String,
    },
    status: {
      type: String,
      trim: true,
      minlength: 3,
      required: true,
      default: "ACTIVE",
    },
    type: {
      type: Schema.Types.Mixed,
    },
    version: {
      type: String,
      trim: true,
    },
    bindingKey: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);
SystemComponentSchema.methods.toJSON = function () {
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

SystemComponentSchema.plugin(passportLocalMongoose);
const SystemComponent = mongoose.model(
  "SystemComponent",
  SystemComponentSchema
);

module.exports = SystemComponent;
