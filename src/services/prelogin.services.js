const User = require("../models/user.model");
const Token = require("../models/tokens.model");
const jwt = require("jwt-simple");
const config = require("../config/jwt.config");
const utils = require("../utils/utils");
const MessageTemplate = require("../models/message.template.model");
const sendMail = require("./emailer.services").sendEmail;
const Project = require("../models/project.model");
const { generateForgotPasswordLink } = require("./generateLink.services");
const { decrypt } = require("./crypto");
const Role = require("../models/role.model");
const Permission = require("../models/permission.model");
const mongoose = require("mongoose");
const { success, error } = require("../utility/base.response");
const Trigger = require("../models/trigger.model");
const moment = require("moment-timezone");
const Component = require("../models/component.model");
const Asset = require("../models/asset.model");
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

module.exports = {
  getProjectConfiguration: async (req) => {
    return new Promise((res, rej) => {
      let configuraions = Project.findOne({
        _id: ObjectId(req.projectId),
        isPublished: true,
      });
      let query = { projectId: ObjectId(req.projectId) };
      let triggerQuery = {
        $or: [
          {
            projectId: ObjectId(req.projectId),
          },
          { createdBy: SYSTEM, projectId: null, projectType: req.projectType },
        ],
      };
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
            if (!configuraionsResult) {
              rej(
                error(
                  "apis.getProjectConfiguration.projectNotPublished",
                  configuraionsResult
                )
              );
              return;
            }
            let projectJson = {
              $schema: "./unify_config_schema.json",
              schemaVersion: configuraionsResult.version,
              projectId: 1,
              config: {
                id: 1,
                name: configuraionsResult?.name,
                version: configuraionsResult.version,
                mainComponentId: configuraionsResult.mainComponentId,
                locale: configuraionsResult.locale,
                appMode: configuraionsResult.appMode,
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
                components: componentsResult,
                triggers: triggersResult,
                assets: assetsResults,
              },
            };
            res(success("apis.getProjectConfiguration.success", projectJson));
          }
        )
        .catch((err) => {
          console.log("Testing Error", err);
          rej(error("apis.getProjectConfiguration.failed", err.message));
        });
    });
  },
  activateUser: async (req) => {
    return new Promise((res, rej) => {
      decrypt(process.env.KEY, req.userdata)
        .then((userdata) => {
          let user = JSON.parse(JSON.parse(userdata));
          User.findOne({ username: user.name })
            .then((linkUser) => {
              if (!linkUser) {
                res(error("apis.activateUser.userNotFound"));
              }
              if (linkUser.status === "active") {
                res(error("apis.activateUser.userAlreadyActive"));
              }
              User.updateOne(
                { _id: linkUser._id },
                { $set: { status: "active" } }
              )
                .then((resss) => {
                  res(success("apis.activateUser.success"));
                })
                .catch((err) => {
                  res(error(err.message));
                });
            })
            .catch((err) => {
              res(error(err.message));
            });
        })
        .catch((err) => {
          res(error("apis.activateUser.failed"));
        });
    });
  },
  checkAvailability: async (req) => {
    return new Promise((res, rej) => {
      User.findOne(
        {
          username: String(req.userName).toLowerCase(),
        },
        {
          username: true,
        }
      )
        .collation({ locale: "en", strength: 1 })
        .lean()
        .exec()
        .then((result) => {
          if (!result || !result.username) {
            res(success("apis.checkAvailability.usernameAvailable"));
          } else {
            res(error("apis.checkAvailability.userExists"));
          }
        })
        .catch((err) => {
          rej(error("apis.checkAvailability.failed"));
        });
    });
  },
  login: async (req) => {
    return new Promise((res, rej) => {
      User.findOne({
        username: String(req.username).toLowerCase(),
      })
        .populate({
          path: "projects",
          model: Project,
        })
        .populate({
          path: "roles",
          populate: {
            path: "permissions",
            model: Permission,
          },
        })
        .then(async (result) => {
          if (!result || !result.username) {
            res(error("apis.login.invalidLogin"));
          } else {
            if (result.status === "pending") {
              res(error("apis.login.userInactive"));
            }
            var payload = {
              username: result.username,
              expire: Date.now() + Number(process.env.tokenExpireTime), //2 mins,
            };
            var token = jwt.encode(payload, config.jwtSecret);

            var refreshPayload = {
              username: result.username,
              expire: Date.now() + Number(process.env.tokenRefresExpireTime), //4 mins,
            };
            var refreshtoken = jwt.encode(refreshPayload, config.jwtSecret);
            const content = {
              ...result.toJSON(),
              TET: payload.expire,
              refreshToken: refreshtoken,
              refreshTET: refreshPayload.expire,
            };
            result.sessionAuthorized = true;
            result.lastLoginTime = Date.now();
            let modelUser = new User(result);
            modelUser.sessionId = new Date().getTime();
            modelUser.save().then((resofSave) => {});

            //save token in database
            let _tokens = {
              token: token,
              userId: result._id,
              TET: payload.expire,
              refreshToken: refreshtoken,
              refreshTET: refreshPayload.expire,
            };

            Token.findOneAndUpdate({ userId: result._id }, _tokens, {
              upsert: true,
              useFindAndModify: false,
            }).then((resofSave) => {});

            content.token = token;
            let permissions = [];
            content.roles.forEach((element) => {
              permissions = permissions.concat(element.permissions);
            });
            permissions = permissions.filter(
              (v, i, a) =>
                a.findIndex((t) => t.name === v.name) === i &&
                v.status !== "INACTIVE"
            );
            content.permissions = permissions;
            res(success("apis.login.success", content));
          }
        });
    }).catch((err) => {
      rej(error("apis.login.failed"));
    });
  },
  register: async (req) => {
    return new Promise(async (res, rej) => {
      var isExists = await User.find({ email: req.email });
      if (isExists && isExists.length > 0) {
        res(error("apis.register.emailExists"));
        return;
      }
      var ObjectId = mongoose.Types.ObjectId;
      var projects = await Project.find({});
      var user = new User({
        name: req.fullName,
        username: String(req.userName).toLowerCase(),
        email: req.email,
        profileImage: utils.profileImage,
        status: "pending",
        projects: projects,
      });
      user.roles.push(ObjectId(process.env.ADMIN_ROLE_ID));
      user.roles.push(ObjectId(process.env.USER_ROLE_ID));
      User.register(user, req.password, function (err, msg) {
        if (err) {
          if (err.code === 11000 && err.keyPattern.email) {
            res(error("apis.register.emailExists"));
          }
          res(error(err.message));
        } else {
          let message = "";
          MessageTemplate.findOne({ name: "activateuser" })
            .then((activateuserTemplate) => {
              if (!activateuserTemplate) {
                res(error("apis.register.templateNotFound"));
              }

              let messageDetails = {
                username: req.fullName,
                Link: generateForgotPasswordLink(req.userName, "activateuser"),
              };

              message = activateuserTemplate.template.replace(
                /{\w+}/g,
                (placeholder) =>
                  messageDetails[
                    placeholder.substring(1, placeholder.length - 1)
                  ] || placeholder
              );

              var emailMessage = {};
              emailMessage.Subject = activateuserTemplate.subject;
              emailMessage.message = message + "</b>";

              sendMail(emailMessage, req.email)
                .then((emailres) => {
                  res(success(msg));
                })
                .catch((err) => {
                  res(error("apis.register.emailFailed"));
                });
            })
            .catch((err) => {
              res(error(err.message));
            });
          res(success(msg));
        }
      });
    });
  },
  forgotpassword: async (req) => {
    return new Promise((res, rej) => {
      let query = {
        username: String(req.username).toLowerCase(),
      };
      User.findOne(query)
        .then((user) => {
          if (!user) {
            res(error("apis.forgotpassword.userNotFound"));
          }
          let message = "";
          MessageTemplate.findOne({ name: "forgotpassword" })
            .then((forgotPasswordTemplate) => {
              if (!forgotPasswordTemplate) {
                res(error("apis.forgotpassword.templateNotFound"));
              }

              let messageDetails = {
                username: user.username,
                Link: generateForgotPasswordLink(
                  user.username,
                  "forgotchangepassword"
                ),
              };

              message = forgotPasswordTemplate.template.replace(
                /{\w+}/g,
                (placeholder) =>
                  messageDetails[
                    placeholder.substring(1, placeholder.length - 1)
                  ] || placeholder
              );
              var emailMessage = {};
              emailMessage.Subject = forgotPasswordTemplate.subject;
              emailMessage.message = message + "</b>";

              sendMail(emailMessage, user.email)
                .then((emailres) => {
                  res(success("apis.forgotpassword.emailSent"));
                })
                .catch((err) => {
                  console.log("err", err.message);
                  res(error("apis.forgotpassword.emailFailed"));
                });
            })
            .catch((err) => {
              res(error(err.message));
            });
        })
        .catch((err) => {
          res(error(err.message));
        });
    });
  },
  validateLink: async (req) => {
    return new Promise((res, rej) => {
      decrypt(process.env.KEY, req.userdata)
        .then((userdata) => {
          res(success("apis.validateLink.success"));
        })
        .catch((err) => {
          res(error("apis.validateLink.failed"));
        });
    });
  },
  resetpassword: async (req) => {
    return new Promise((res, rej) => {
      decrypt(process.env.KEY, req.userdata)
        .then((userdata) => {
          userdata = JSON.parse(userdata);
          userdata = JSON.parse(userdata);
          let linkExpiretime = process.env.linkExpiry;
          let timedifference =
            (new Date() - new Date(userdata.timestamp)) / 60000;
          if (timedifference > linkExpiretime) {
            res(error("apis.resetpassword.linkExpired"));
          }

          User.findOne({ username: userdata.name })
            .then((linkUser) => {
              if (!linkUser) {
                res(error("apis.resetpassword.userNotFound"));
              }
              let user = new User(linkUser);
              user.setPassword(req.password, function (err, user) {
                if (err) {
                  res(error(err.message));
                }
                user.save(function (err) {
                  //clear token database agiant user
                  Token.deleteOne({ userId: user._id }).then((res) => {});

                  res(success("apis.resetpassword.success"));
                });
              });
            })
            .catch((err) => {
              res(error(err.message));
            });
        })
        .catch((err) => {
          res(error("apis.resetpassword.failed"));
        });
    });
  },
};
