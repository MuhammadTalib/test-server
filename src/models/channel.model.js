const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChannelSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    id: {
      type: String,
      required: true,
    },
    apiKey: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Channels = mongoose.model("Channels", ChannelSchema);

module.exports = Channels;
