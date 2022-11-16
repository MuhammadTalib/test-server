const { Mongoose } = require("mongoose");
const Counter = require("../models/counter");
const mongoose = require("mongoose");
const Project = require("../models/project.model");
const ObjectId = mongoose.Types.ObjectId;
const { success, error } = require("../utility/base.response");

module.exports = {
  next: async (req) => {
    return new Promise(async (res, rej) => {
      await Counter.findOne(
        { name: req.body.name },
        { projects: { $elemMatch: { _id: ObjectId(req.body.projectId) } } }
      )
        .then((result) => {
          if (result?.projects && result?.projects?.length > 0) {
            result.projects[0].next = result.projects[0].next + 1;
            result
              .save()
              .then((updateCounterResult) => {
                res(success("apis.counter.success", updateCounterResult));
              })
              .catch((updateCounterError) => {
                rej(error("apis.counter.failed"));
              });
          } else {
            rej(error("apis.counter.failed"));
          }
        })
        .catch((err) => {
          console.log("error ", err);
        });
    });
  },
};
