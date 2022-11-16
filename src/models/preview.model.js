const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PreviewSchema = new Schema(
  {
    configuration: {
      type: Schema.Types.Mixed,
    },
    expireAt: {
      type: Date,
      default: Date.now,
      index: { expires: "3600m" },
    },
    id: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Preview = mongoose.model("Preview", PreviewSchema);

module.exports = Preview;
