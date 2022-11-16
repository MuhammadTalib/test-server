const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var moment = require("moment-timezone");
const AuthorizationConfiguration =
  require("./authorization.configuration.model").schema;

const ProjectSchema = new Schema(
  {
    id: String,
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
    version: {
      type: String,
      required: true,
    },
    locale: {
      type: String,
      required: true,
    },
    launchProject: {
      type: Boolean,
      required: true,
    },
    globalErrorType: {
      type: String,
      required: true,
    },
    autoHideDuration: {
      type: Number,
      required: true,
    },
    showWidgetError: {
      type: Boolean,
      required: true,
    },
    showWidgetSuccess: {
      type: Boolean,
      required: true,
    },
    autoHideMessage: {
      type: Boolean,
      required: true,
    },
    closeableMessage: {
      type: Boolean,
      required: true,
    },
    status: {
      type: String,
      trim: true,
      minlength: 3,
      required: true,
    },
    appMode: { type: String },
    projectType: { type: String },
    isPublished: { type: Boolean, default: false },
    themeId: [
      {
        type: Schema.Types.ObjectId,
        ref: "Themes",
      },
    ],
    users: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    mainComponentId: String,
    securityConfigurations: [AuthorizationConfiguration],
  },
  {
    timestamps: true,
  }
);

ProjectSchema.methods.toJSON = function () {
  try {
    const project = this;
    const projectObject = project.toObject();

    projectObject.updatedTimestamp = moment
      .tz(
        projectObject.updatedAt,
        Intl.DateTimeFormat().resolvedOptions().timeZone
      )
      .format();

    projectObject.createdAt = projectObject.createdAt
      ? moment(projectObject.createdAt).format(process.env.SYSTEM_DATE_FORMAT)
      : "N/A";
    projectObject.updatedAt = projectObject.updatedAt
      ? moment(projectObject.updatedAt).format(process.env.SYSTEM_DATE_FORMAT)
      : "N/A";

    return projectObject;
  } catch (error) {
    console.log("error--", error);
  }
};

const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;
