const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const permissionSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },
    status: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },
    type: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },
    subType: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },

    parent: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },
    iconColor: {
      type: String,
      trim: true,
    },
    localeLabel: {
      type: String,
      trim: true,
    },
    iconName: {
      type: String,
      trim: true,
    },
    localeTooltip: {
      type: String,
      trim: true,
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

const Permission = mongoose.model("Permission", permissionSchema);

module.exports = Permission;
