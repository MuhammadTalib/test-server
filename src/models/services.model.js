const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ServiceSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },
    type: {
      type: Schema.Types.Mixed,
      required: true,
    },
    command: {
      type: Schema.Types.ObjectId,
      ref: "Command",
    },
    status: {
      type: String,
      required: true,
    },
    projectType: { type: String },
  },
  {
    timestamps: true,
  }
);

const Service = mongoose.model("Service", ServiceSchema);

module.exports = Service;
