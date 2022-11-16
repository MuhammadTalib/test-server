const Project = require("../models/project.model");
const mongoose = require("mongoose");
const { template } = require("../utils/template");

const {
  addComponent,
  deleteComponentsByProjectID,
} = require("./component.services");
const { addTrigger, deleteTriggersByProjectID } = require("./trigger.services");
const Trigger = require("../models/trigger.model");
const moment = require("moment-timezone");
const Component = require("../models/component.model");
const Asset = require("../models/asset.model");
const { success, error } = require("../utility/base.response");
const ObjectId = mongoose.Types.ObjectId;
const {
  ADD,
  EDIT,
  DELETE,
  COMPONENT_POPULATE_PARAMS,
  TRIGGER_POPULATE_PARAMS,
  ASSET_POPULATE_PARAMS,
  SYSTEM,
} = require("./../utils/constants");
const { deleteAssetsByProjectID } = require("./asset.services");
const { nanoid } = require("nanoid");
const parseTemplate = async (template1, project) => {
  return new Promise(async (res, rej) => {
    let projectId = project._id;

    let promiseArray = [];
    await template1?.config.components.forEach(async (component) => {
      await promiseArray.push(processComponent(component, projectId));
    });
    await template1?.config.triggers.forEach(async (trigger) => {
      await promiseArray.push(processTrigger(trigger, projectId));
    });
    Promise.allSettled(promiseArray)
      .then((allPromise) => {
        res(allPromise);
      })
      .catch((err) => {
        rej(err);
      });
  });
};

const processComponent = async (component, projectId) => {
  return new Promise(async (res, rej) => {
    addComponent({
      componentId: component.id,
      projectId: projectId,
      name: component.name || "Component_ " + component.id,
      type: component.type,
      subType: component.subtype || "component",
      attributes: component.attributes,
      events: component.events,
      version: "1.0.0",
      status: "ACTIVE",
      id: component.id,
      action: ADD,
    })
      .then((result) => {
        res(result);
      })
      .catch((err) => {
        rej(err);
      });
  });
};

const processTrigger = async (trigger, projectId) => {
  return new Promise(async (res, rej) => {
    addTrigger({
      id: trigger.id,
      projectId: projectId,
      name: trigger.name || "Trigger_ " + trigger.id,
      services: trigger.services,
      status: "ACTIVE",
    })
      .then((result) => {
        res(result);
      })
      .catch((err) => {
        rej(err);
      });
  });
};

const editProject = async (req) => {
  return new Promise((res, rej) => {
    Project.updateOne({ _id: ObjectId(req._id) }, { $set: { ...req } })
      .then((result) => {
        res(success("apis.updatedProject.success", req));
      })
      .catch(() => {
        rej(error("apis.updatedProject.failed", err.message));
      });
  });
};

const addProject = async (req) => {
  return new Promise(async (res, rej) => {
    let isExists = await Project.findOne({ name: req.name });
    console.log("isExists", isExists);
    if (isExists) {
      res(error("apis.createProject.nameAlreadyExists"));
      return;
    }
    const project = new Project(req);
    project.status = "ACTIVE";
    project.theme = "standard";
    project.users.push(req.userId);
    project
      .save()
      .then(async (result) => {
        if (!result) {
          res(error("apis.createProject.failed", result));
        }
        if (req.template) {
          parseTemplate(template, result)
            .then((parsed) => {
              parsed.forEach((p) => {
                if (p.status === "rejected") {
                  deleteComponentsByProjectID({ projectId: result._id })
                    .then((del1) => {
                      this.deleteProjectById({ ID: result._id })
                        .then((del) => {
                          return rej(error("apis.createProject.failed", del));
                        })
                        .catch((err) => {
                          return rej(
                            error("apis.createProject.failed", err.message)
                          );
                        });
                    })
                    .catch((err) => {
                      return rej(
                        error("apis.createProject.failed", err.message)
                      );
                    });
                }
              });
              res(success("apis.createProject.success", result));
            })
            .catch((err) => {
              rej(error("apis.createProject.failed", err.message));
            });
        } else {
          res(success("apis.createProject.success", result));
        }
      })
      .catch((err) => {
        rej(error("apis.createProject.failed", err.message));
      });
  });
};

const deleteProject = async (req) => {
  return new Promise((res, rej) => {
    deleteTriggersByProjectID({ projectId: ObjectId(req.id) })
      .then(() => {
        deleteComponentsByProjectID({ projectId: ObjectId(req.id) })
          .then(() => {
            deleteAssetsByProjectID({ projectId: ObjectId(req.id) })
              .then(() => {
                Project.deleteOne({
                  _id: ObjectId(req.id),
                })
                  .then((result) => {
                    res(success("apis.deleteProject.success", result));
                  })
                  .catch((err) => {
                    rej(error("apis.deleteProject.failed", err.message));
                  });
              })
              .catch((err) => {
                return rej(error("apis.deleteProject.failed", err.message));
              });
          })
          .catch((err) => {
            return rej(error("apis.deleteProject.failed", err.message));
          });
      })
      .catch((err) => {
        return rej(error("apis.deleteProject.failed", err.message));
      });
  });
};

module.exports = {
  getProjects: async (req) => {
    return new Promise((res, rej) => {
      Project.find({ projectType: req.body.projectType })
        .then((result) => {
          res(success("apis.getProjects.success", result));
        })
        .catch((err) => {
          rej(error("apis.getProjects.failed", err.message));
        });
    });
  },
  generateJSON: async (req) => {
    return new Promise((res, rej) => {
      let configuraions = Project.findOne({ _id: ObjectId(req.projectId) });
      let triggerQuery = {
        $or: [
          {
            projectId: ObjectId(req.projectId),
          },
          { createdBy: SYSTEM, projectId: null, projectType: req.projectType },
        ],
      };
      let query = { projectId: ObjectId(req.projectId) };
      let components = Component.find(query, COMPONENT_POPULATE_PARAMS);
      let triggers = Trigger.find(triggerQuery, TRIGGER_POPULATE_PARAMS);
      let assets = Asset.find(
        { projectId: ObjectId(req.projectId) },
        ASSET_POPULATE_PARAMS
      );
      Promise.all([configuraions, components, triggers, assets])
        .then(
          ([
            configuraionsResult,
            componentsResult,
            triggersResult,
            assetsResults,
          ]) => {
            let projectJson = {
              config: {
                id: 1,
                name: configuraionsResult?.name,
                version: configuraionsResult.version,
                mainComponentId: configuraionsResult.mainComponentId,
                locale: configuraionsResult.locale,
                globalErrorType: configuraionsResult.globalErrorType,
                showWidgetError: configuraionsResult.showWidgetError,
                showWidgetSuccess: configuraionsResult.showWidgetSuccess,
                autoHideMessage: configuraionsResult.autoHideMessage,
                securityConfigurations:
                  configuraionsResult.securityConfigurations,
                closeableMessage: configuraionsResult.closeableMessage,
                updatedTimestamp: moment
                  .tz(
                    configuraionsResult.updatedAt,
                    Intl.DateTimeFormat().resolvedOptions().timeZone
                  )
                  .format(),
                autoHideDuration: 10,
                components: componentsResult,
                triggers: triggersResult,
                assets: assetsResults,
              },
            };
            res(success("apis.generateJSON.success", projectJson));
          }
        )
        .catch((err) => {
          console.log("Testing Error", err);
          rej(error("apis.generateJSON.failed", err.message));
        });
    });
  },
  savePreviewJSON: async (req) => {
    return new Promise((res, rej) => {
      let configuraions = Project.findOne({ _id: ObjectId(req.projectId) });
      let query = { projectId: ObjectId(req.projectId) };
      let assets = Asset.find(
        { projectId: ObjectId(req.projectId) },
        ASSET_POPULATE_PARAMS
      );
      Promise.all([configuraions, assets])
        .then(([configuraionsResult, assetsResults]) => {
          let projectJson = {
            config: {
              id: 1,
              name: configuraionsResult?.name,
              version: configuraionsResult.version,
              mainComponentId: req.mainComponentId,
              locale: configuraionsResult.locale,
              globalErrorType: configuraionsResult.globalErrorType,
              showWidgetError: configuraionsResult.showWidgetError,
              showWidgetSuccess: configuraionsResult.showWidgetSuccess,
              autoHideMessage: configuraionsResult.autoHideMessage,
              closeableMessage: configuraionsResult.closeableMessage,
              securityConfigurations:
                configuraionsResult.securityConfigurations,
              updatedTimestamp: moment
                .tz(
                  configuraionsResult.updatedAt,
                  Intl.DateTimeFormat().resolvedOptions().timeZone
                )
                .format(),
              autoHideDuration: 10,
              components: JSON.parse(req.components),
              triggers: [],
              assets: assetsResults,
            },
          };
          res(success("apis.generateJSON.success", projectJson));
        })
        .catch((err) => {
          console.log("Testing Error", err);
          rej(error("apis.generateJSON.failed", err.message));
        });
    });
  },
  deleteProjectById: async (req) => {
    return new Promise((res, rej) => {
      Project.deleteOne({
        _id: ObjectId(req.ID),
      })
        .then((result) => {
          res(success("apis.deleteProjectById.success", result));
        })
        .catch((err) => {
          rej(error("apis.deleteProjectById.failed", err.message));
        });
    });
  },
  projectManagement: async (req) => {
    if (req.action === ADD) {
      // addProject
      return addProject(req);
    }
    if (req.action === EDIT) {
      // editProject
      return editProject(req);
    }
    if (req.action === DELETE) {
      // deleteProject
      return deleteProject(req);
    }
  },
};
