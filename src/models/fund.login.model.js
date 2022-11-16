const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const login = new Schema(
  {
    username: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);
const FTlogin = mongoose.model("login", login);

module.exports = FTlogin;
