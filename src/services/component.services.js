const SystemComponent = require("../models/system.component.model");
const SystemComponentVersion = require("../models/system.component.version.model");
const Component = require("../models/component.model");
const mongoose = require("mongoose");
const { success, error } = require("../utility/base.response");
const ObjectId = mongoose.Types.ObjectId;
const { ADD, EDIT, DELETE } = require("./../utils/constants");

const addComponent = async (req) => {
  return new Promise(async (res, rej) => {
    let add = { ...req };
    await Component.create({
      name: add.name,
      version: add.version,
      type: add.type,
      subType: add.subType,
      attributes: add.attributes,
      events: add.events,
      projectId: ObjectId(add.projectId),
      status: add.status,
      Documentation: add.Documentation,
      id: add.id,
    })
      .then((result) => {
        res(success("apis.addComponent.success", result));
      })
      .catch((err) => {
        console.log("err->>", err.message);
        rej(error("apis.addComponent.failed", err.message));
      });
  });
};
const editComponent = async (req) => {
  return new Promise(async (res, rej) => {
    let compResult = await Component.find({
      _id: ObjectId(req.componentId), // component exist
      projects: ObjectId(req.projectId), // project exist
    });
    if (compResult !== null && compResult.length > 0) {
      let update = { ...req };
      await Component.updateOne(
        { _id: ObjectId(req.componentId) },
        {
          name: update.name,
          version: update.version,
          type: update.type,
          subType: update.subType,
          attributes: update.attributes,
          events: update.events,
          projectId: ObjectId(add.projectId),
          status: update.status,
          Documentation: update.Documentation,
        }
      )
        .then((result) => {
          res(success("apis.editComponent.success", err.message));
        })
        .catch((err) => {
          rej(error("apis.editComponent.failed", err.message));
        });
    }
  });
};
const addComponents = async (req) => {
  return new Promise((res, rej) => {
    Component.bulkWrite(
      req.components.map((val) => {
        return {
          updateOne: {
            filter: { id: val.id, projectId: ObjectId(val.projectId) },
            update: {
              $set: { ...val, updatedBy: req.user.username },
              $setOnInsert: {
                createdBy: req.user.username,
              },
            },
            upsert: true,
          },
        };
      })
    )
      .then((result) => {
        res(success("apis.addMultiComponents.success", result));
      })
      .catch((err) => {
        rej(error("apis.addMultiComponents.failed", err.message));
      });
  });
};
const deleteComponent = async (req) => {
  return new Promise((res, rej) => {
    Component.deleteOne({ _id: ObjectId(req.id) })
      .then((result) => {
        res(success("apis.deleteComponent.success"));
      })
      .catch((err) => {
        rej(error("apis.deleteComponent.failed"));
      });
  });
};

module.exports = {
  getSystemComponents: async (req) => {
    return new Promise(async (res, rej) => {
      try {
        let widgets = await Component.find({
          subType: "widget",
          projectId: ObjectId(req.projectId),
        });
        let systemComponents = await SystemComponent.find({
          status: "ACTIVE",
          isLatest: true,
          projectType: req.projectType,
        });
        let result = [...systemComponents, ...widgets];
        result = result.sort((a, b) => a.order - b.order);
        res(success("apis.getSystemComponents.success", result));
      } catch (e) {
        rej(error("apis.getSystemComponents.failed", e));
      }
    });
  },
  getComponents: async (req) => {
    return new Promise((res, rej) => {
      let query = {
        projectId: ObjectId(req.body.projectId),
      };
      if (Array.isArray(req.body.subtype)) {
        query["subType"] = { $in: req.body.subtype };
      } else {
        query["subType"] = req.body.subtype;
      }
      if (req.body.isSwappable) {
        let query1 = {
          projectId: ObjectId(req.body.projectId),
          type: 10001,
          "attributes.isSwappable": true,
        };
        query = { $or: [query, query1] };
      }
      if (req.body.id) {
        query["id"] = req.body.id;
      }

      Component.find(query)
        .then((result) => {
          res(success("apis.getComponents.success", result));
        })
        .catch((err) => {
          console.log("err-->", err);
          rej(error("apis.getComponents.failed", result));
        });
    });
  },
  addDocumentation: async (req) => {
    return new Promise((res, rej) => {
      Component.updateOne(
        { _id: ObjectId(req.ID) },
        { $set: { Documentation: req.documentation } }
      )
        .then((result) => {
          res(success("apis.addDocumentation.success", result));
        })
        .catch((err) => {
          rej(error("apis.addDocumentation.failed", result));
        });
    });
  },
  deleteComponentsByProjectID: async (req) => {
    return new Promise((res, rej) => {
      Component.deleteMany({
        projectId: ObjectId(req.projectId),
      })
        .then((result) => {
          res(success("apis.deleteComponentsByProjectID.success", result));
        })
        .catch((err) => {
          rej(error("apis.deleteComponentsByProjectID.failed"));
        });
    });
  },
  addSystemCompDocumentation: async (req) => {
    return new Promise((res, rej) => {
      SystemComponent.updateOne(
        { _id: ObjectId(req.ID) },
        { $set: { Documentation: req.documentation } }
      )
        .then((result) => {
          res(success("apis.addSystemCompDocumentation.success", result));
        })
        .catch((err) => {
          rej(error("apis.addSystemCompDocumentation.failed", err.message));
        });
    });
  },
  componentManagement: async (req) => {
    if (req.action === ADD) {
      // addProject
      if (req.components) {
        //add Multiple Components
        return addComponents(req);
      }
      return addComponent(req);
    }
    if (req.action === EDIT) {
      // editProject
      return editComponent(req);
    }
    if (req.action === DELETE) {
      // deleteProject
      return deleteComponent(req);
    }
  },
  addComponent,
};
