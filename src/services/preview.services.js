const Preview = require("../models/preview.model");
const { success, error } = require("../utility/base.response");
const ObjectId = require("mongoose").Types.ObjectId;
const {
  ADD,
  EDIT,
  DELETE,
  ASSET_POPULATE_PARAMS,
  TRIGGER_POPULATE_PARAMS,
  SYSTEM,
} = require("../utils/constants");
const Project = require("../models/project.model");
const Asset = require("../models/asset.model");
const moment = require("moment-timezone");
const Trigger = require("../models/trigger.model");

//Tbd not in use
async function addPreview(req) {
  return new Promise(async (res, rej) => {
    try {
      let configuraions = Project.findOne({ _id: ObjectId(req.projectId) });
      let assets = Asset.find(
        { projectId: ObjectId(req.projectId) },
        ASSET_POPULATE_PARAMS
      );
      // let triggers = Trigger.find(
      //   {
      //     $or: [
      //       {
      //         projectId: ObjectId(req.projectId),
      //       },
      //       {
      //         createdBy: SYSTEM,
      //         projectId: null,
      //         projectType: req.projectType,
      //       },
      //     ],
      //   },
      //   TRIGGER_POPULATE_PARAMS
      // );

      Promise.all([configuraions, assets])
        .then(async ([configuraionsResult, assetsResults]) => {
          let projectJson = {
            schema: "./unify_config_schema.json",
            schemaVersion: configuraionsResult.version,
            projectId: 1,
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
              updatedTimestamp: moment
                .tz(
                  configuraionsResult.updatedAt,
                  Intl.DateTimeFormat().resolvedOptions().timeZone
                )
                .format(),
              autoHideDuration: 10,
              components: req.components,
              triggers: [],
              appMode: req.appMode,
              assets: assetsResults.map(function (p) {
                return p.toJSON();
              }),
            },
          };
          let previewObj = new Preview({
            id: req.id,
            configuration: projectJson,
          });
          let result = await previewObj.save();
          if (result) {
            res(success("apis.addPreview.success", projectJson));
          } else {
            rej(error("apis.addPreview.failed"));
          }
        })
        .catch((err) => {
          console.log("err", err);
          rej(error("apis.addPreview.failed"));
        });
    } catch (err) {
      console.log("err", err);
    }
  });
}

async function editPreview(req) {
  return new Promise(async (res, rej) => {
    let preview = await Preview.findOne({
      _id: ObjectId(req._id),
    });
    if (preview) {
      preview.configuration = req.configuration;
      let result = await preview.save();
      if (result) {
        res(success("apis.editPreview.success"));
      } else {
        rej(error("apis.editPreview.failed"));
      }
    }
  });
}

async function deletePreview(req) {
  return new Promise((res, rej) => {
    Preview.deleteOne({ _id: ObjectId(req._id) })
      .then((result) => {
        res(success("apis.deletePreview.success"));
      })
      .catch((err) => {
        rej(error("apis.deletePreview.failed"));
      });
  });
}

async function getPreview(req) {
  return new Promise((res, rej) => {
    Preview.find()
      .then((result) => {
        res(success("apis.getPreview.success", result));
      })
      .catch((err) => {
        rej(error("apis.getPreview.failed"));
      });
  });
}

async function getPreviewById(req) {
  return new Promise((res, rej) => {
    Preview.findOne({
      id: req.id,
    })
      .then((result) => {
        res(success("apis.getPreview.success", result));
      })
      .catch((err) => {
        rej(error("apis.getPreview.failed"));
      });
  });
}

async function previewManagement(req) {
  if (req.action === ADD) {
    // addPreview
    return addPreview(req);
  }
  if (req.action === EDIT) {
    // editPreview
    return editPreview(req);
  }
  if (req.action === DELETE) {
    // deletePreview
    return deletePreview(req);
  }
}

module.exports = {
  getPreview,
  previewManagement,
  getPreviewById,
};
