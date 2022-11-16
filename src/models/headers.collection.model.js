const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HeadersCollectionSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    headers: {
      type: Schema.Types.Mixed,
    },
    status: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const HeadersCollection = mongoose.model(
  "HeadersCollection",
  HeadersCollectionSchema
);

module.exports = HeadersCollection;
