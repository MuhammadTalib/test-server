const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;
var moment = require("moment-timezone");

const ComponentSchema = new Schema(
  {
    id: {
      type: String,
    },
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },
    version: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      trim: true,
      minlength: 3,
      required: true,
    },
    type: {
      type: Schema.Types.Mixed,
      required: true,
    },
    subType: {
      type: String,
      required: true,
    },
    Documentation: {
      type: String,
    },
    attributes: {
      type: Schema.Types.Mixed,
    },
    events: {
      type: Array,
    },
    layout: { type: Array },
    projectId: Schema.Types.ObjectId,
    icon: {
      type: String,
    },
    bindingKey: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);
ComponentSchema.pre("save", function (next, done) {
  let comp = this;
  if (!(comp && comp.id)) {
    Components.findOne({ projectId: ObjectId(this.projectId) })
      .sort({ id: -1 })
      .limit(1)
      .then((res) => {
        if (res?.id) {
          comp.id = res.id + 1;
        } else {
          comp.id = 1;
        }
        next();
      })
      .catch((err) => {
        console.log("err", err);
      });
  } else {
    Components.findOne({ projectId: ObjectId(this.projectId), id: comp.id })
      .then((res) => {
        if (res && res.id) {
          return next(new Error("ID Already Exists!"));
        } else next();
      })
      .catch((err) => {
        console.log("err", err);
      });
  }
});

ComponentSchema.methods.toJSON = function () {
  const component = this;
  const componentObject = component.toObject();

  componentObject.updatedTimestamp = moment
    .tz(
      componentObject.updatedAt,
      Intl.DateTimeFormat().resolvedOptions().timeZone
    )
    .format();
  componentObject.createdAt = componentObject.createdAt
    ? moment(componentObject.createdAt).format(process.env.SYSTEM_DATE_FORMAT)
    : "N/A";
  componentObject.updatedAt = componentObject.updatedAt
    ? moment(componentObject.updatedAt).format(process.env.SYSTEM_DATE_FORMAT)
    : "N/A";

  return componentObject;
};

const Components = mongoose.model("Components", ComponentSchema);

module.exports = Components;
