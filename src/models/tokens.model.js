const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TokenSchema = new Schema({
  userId: {
    type: String,
  },
  token: {
    type: String,
  },
  TET: {
    type: String,
  },
  refreshToken: {
    type: String,
  },
  refreshTET: {
    type: String,
  },
});

const Tokens = mongoose.model("Tokens", TokenSchema);

module.exports = Tokens;
