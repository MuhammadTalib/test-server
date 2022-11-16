const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Accounts = new Schema(
  {
    fromInstrument: {
      type: Object,
    },
    toInstrument: {
      type: Object,
    },
    amount: {
      type: String,
      trim: true,
    },
    comments: {
      type: String,
      trim: true,
    },
    transferType: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const FTAccount = mongoose.model("transfer", Accounts);

module.exports = FTAccount;
