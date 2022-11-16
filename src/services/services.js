var Service = require("../models/services.model");
var mongoose = require("mongoose");

module.exports = {
  getServices: async (req) => {
    return new Promise((res, rej) => {
      Service.find({ status: "ACTIVE", projectType: req.projectType })
        .then((result) => {
          const Services = {
            code: 1,
            message: "Services fetched successfully",
            content: result,
          };
          res(Services);
        })
        .catch((err) => {
          rej({
            code: 0,
            message: "Unable To Get Services",
          });
        });
    });
  },
};
