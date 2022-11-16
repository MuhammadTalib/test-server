const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommandSchema = new Schema(
  {
    type: {
      type: Number,
      required: true,
    },
    attributes: {
      type: Schema.Types.Mixed,
      default: {},
    },
    returns: [],
  },
  { minimize: false }
);

const Command = mongoose.model("Command", CommandSchema);

module.exports = Command;
