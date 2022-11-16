const Trigger = require("../models/trigger.model");
const { success, error } = require("../utility/base.response");
const ObjectId = require("mongoose").Types.ObjectId;
const { nanoid } = require("nanoid");
const { ADD, EDIT, DELETE, SYSTEM } = require("./../utils/constants");

const addTrigger = async (req) => {
  return new Promise(async (res, rej) => {
    let trigger;
    if (req._id) {
      trigger = await Trigger.findOne({ _id: ObjectId(req._id) });
    }
    let messages = { error: "", success: "" };
    trigger = new Trigger(req);
    trigger.projectId = ObjectId(req.projectId);
    trigger.id = req.id || nanoid();
    if (req && req.createdBy !== SYSTEM) {
      trigger.createdBy = req?.user ? req?.user?.username : req.createdBy;
      trigger.updatedBy = req?.user ? req?.user?.username : req.updatedBy;
    }
    messages = {
      error: "apis.addTrigger.failed",
      success: "apis.addTrigger.success",
    };
    let result = await trigger.save();
    if (result) {
      res(success(messages.success, result));
    } else {
      rej(error(messages.error, err));
    }
  });
};
const editTrigger = async (req) => {
  return new Promise(async (res, rej) => {
    let trigger = await Trigger.findOne({ _id: ObjectId(req._id) });
    let messages = { error: "", success: "" };
    if (trigger) {
      trigger.name = req.name;
      trigger.status = req.status;
      trigger.services = req.services;
      trigger.updatedBy = req.user.username;
      trigger.projectId = ObjectId(req.projectId);
      messages = {
        error: "apis.editTrigger.failed",
        success: "apis.editTrigger.success",
      };
      let result = await trigger.save();
      if (result) {
        res(success(messages.success, result));
      } else {
        rej(error(messages.error, err));
      }
    }
  });
};

const editTriggerWithId = async (req) => {
  return new Promise(async (res, rej) => {
    let query;
    if (req.loaderWidgetId) {
      query = {
        $addToSet: {
          "services.0.command.attributes.loaderWidgetIds": req.loaderWidgetId,
          "services.0.command.attributes.messageWidgetIds": req.loaderWidgetId,
        },
      };
    } else {
      query = {
        $set: {
          "services.0.command.attributes.nextWidgetId": req.nextWidgetId,
        },
      };
    }
    Trigger.updateOne({ id: req.id }, query)
      .then((result) => {
        res(success("apis.editTrigger.success", req));
      })
      .catch((err) => {
        console.log("err", err);

        rej(error("apis.editTrigger.failed", err.message));
      });
  });
};

const deleteTrigger = async (req) => {
  return new Promise((res, rej) => {
    Trigger.deleteOne({ _id: ObjectId(req.id) })
      .then((result) => {
        res(success("apis.deleteTrigger.success"));
      })
      .catch((err) => {
        rej(error("apis.deleteTrigger.failed"));
      });
  });
};
module.exports = {
  getTriggers: async (req) => {
    return new Promise((res, rej) => {
      let filterBy = req.filterBy;
      let query = filterBy
        ? {
            $or: [
              {
                $and: [
                  { "services.type": filterBy },
                  { projectId: ObjectId(req.projectId) },
                ],
              },
              // add
              {
                createdBy: SYSTEM,
                projectType: req.projectType,
              },
            ],
          }
        : {
            $or: [
              { projectId: ObjectId(req.projectId) }, // add
              {
                createdBy: SYSTEM,
                projectType: req.projectType,
              },
            ],
          };
      Trigger.find(query)
        .then((result) => {
          res(success("apis.getAllTriggers.success", result));
        })
        .catch((err) => {
          rej(error("apis.getAllTriggers.failed"));
        });
    });
  },
  getTriggersByFilters: async (req) => {
    return new Promise((res, rej) => {
      let query = {
        services: { $elemMatch: { type: 10 } },
      };
      Trigger.find(query)
        .then((result) => {
          res(success("apis.getAllTriggers.success", result));
        })
        .catch((err) => {
          rej(error("apis.getAllTriggers.failed"));
        });
    });
  },

  triggerManagement: async (req) => {
    if (req.action === ADD) {
      // addTrigger
      return addTrigger(req);
    }
    if (req.action === EDIT) {
      // editTrigger
      return editTrigger(req);
    }
    if (req.action === DELETE) {
      // deleteTrigger
      return deleteTrigger(req);
    }
  },
  addDocumentation: async (req) => {
    return new Promise((res, rej) => {
      Trigger.updateOne(
        { _id: ObjectId(req.ID) },
        { $set: { Documentation: req.documentation } }
      )
        .then((result) => {
          res(success("apis.addDocumentation.success"));
        })
        .catch((err) => {
          rej(error("apis.addDocumentation.failed"));
        });
    });
  },
  deleteTriggersByProjectID: async (req) => {
    return new Promise((res, rej) => {
      Trigger.deleteMany({
        projectId: ObjectId(req.projectId),
      })
        .then((result) => {
          res(success("apis.deleteTriggersByProjectID.success"));
        })
        .catch((err) => {
          rej(error("apis.deleteTriggersByProjectID.failed"));
        });
    });
  },
  addTrigger: addTrigger,
  editTriggerWithId,
};
