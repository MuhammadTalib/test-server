const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const UserSchema = new Schema(
  {
    lastLoginTime: {
      type: Date,
    },
    profileImage: {
      type: String,
      trim: true,
    },
    sessionAuthorized: {
      type: Boolean,
    },
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
    status: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },
    projects: [
      {
        type: Schema.Types.ObjectId,
        ref: "Project",
      },
    ],
    gender: {
      type: String,
      trim: true,
      minlength: 3,
    },
    lastLogoutTime: {
      type: Date,
    },
    lastSessionDuration: {
      type: String,
    },
    sessionId: {
      type: Number,
    },
    roles: [
      {
        type: Schema.Types.ObjectId,
        ref: "Role",
      },
    ],
  },
  {
    timestamps: true,
  }
);

UserSchema.plugin(passportLocalMongoose);
const User = mongoose.model("User", UserSchema);

module.exports = User;
