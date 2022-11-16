const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ThemeSchema = new Schema({
  title: {
    type: String,
  },
  image: {
    type: String,
  },
});

const Themes = mongoose.model("Themes", ThemeSchema);

module.exports = Themes;
