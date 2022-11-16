const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const moment = require("moment");

const UserActivityLogSchema = new Schema(
  {
    uri: {
      type: String,
    },
    username: {
      type: String,
    },
    description: {
      type: String,
    },
    body: {
      type: Object,
    },
    userDevice: {
      type: Object,
    },
    method: {
      type: String,
    },
    sessionId: {
      type: Number,
    },
    action: {
      type: String,
    },
    type: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

UserActivityLogSchema.methods.toJSON = function () {
  try {
    const userActivity = this;
    const userActivityObject = userActivity.toObject();

    userActivityObject.createdAt = userActivityObject.createdAt
      ? moment(userActivityObject.createdAt).format(
          process.env.SYSTEM_DATE_TIME_FORMAT
        )
      : "N/A";
    userActivityObject.updatedAt = userActivityObject.updatedAt
      ? moment(userActivityObject.updatedAt).format(
          process.env.SYSTEM_DATE_TIME_FORMAT
        )
      : "N/A";

    return userActivityObject;
  } catch (error) {
    console.log("error--", error);
  }
};

const UserActivity = mongoose.model("UserActivity", UserActivityLogSchema);

module.exports = UserActivity;
