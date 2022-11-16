const Themes = require("../models/theme.model");
const { success, error } = require("../utility/base.response");

module.exports = {
  allThemes: async (req) => {
    return new Promise((res, rej) => {
      Themes.find()
        .then((result) => {
          res(success("apis.getThemes.success", result));
        })
        .catch((err) => {
          rej(error("apis.getThemes.failed"));
        });
    });
  },
};
