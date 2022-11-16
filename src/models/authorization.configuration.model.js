const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AuthorizationConfigurationSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    configurations: {
      type: Schema.Types.Mixed,
    },
    status: {
      type: String,
    },
    baseUrl: {
      type: String,
    },
    authorizationType: {
      type: String,
    },
    projectId: {
      type: Schema.Types.ObjectId,
      ref: "Project",
    },
  },
  {
    timestamps: true,
  }
);

const AuthorizationConfiguration = mongoose.model(
  "AuthorizationConfiguration",
  AuthorizationConfigurationSchema
);

module.exports = AuthorizationConfiguration;
