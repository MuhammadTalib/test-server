const mongoose = require("mongoose");
const Command = require("./command.model").schema;
const Schema = mongoose.Schema;
const moment = require("moment-timezone");
const ObjectId = mongoose.Types.ObjectId;
const { nanoid } = require("nanoid");

const ServiceDetailsSchema = new Schema({
  type: {
    type: Schema.Types.Mixed,
    required: true,
  },
  command: Command,
});

const TriggerSchema = new Schema(
  {
    id: {
      type: String,
    },
    name: {
      type: String,
      trim: true,
    },
    projectId: Schema.Types.ObjectId,
    services: [ServiceDetailsSchema],
    status: String,
    Documentation: String,
    createdBy: { type: String, default: "user" },
    updatedBy: { type: String, default: "user" },
    canRead: { type: Boolean },
  },
  {
    timestamps: true,
  }
);

TriggerSchema.pre("save", function (next, done) {
  let trig = this;
  if (!trig.id) {
    Trigger.findOne({ projectId: ObjectId(this.projectId) })
      .sort({ id: -1 })
      .limit(1)
      .then((res) => {
        if (res?.id) {
          trig.id = nanoid();
        }
        next();
      })
      .catch((err) => {
        console.log("err", err);
      });
  } else {
    next();
  }
});

TriggerSchema.methods.toJSON = function () {
  const trigger = this;
  const triggerObject = trigger.toObject();

  triggerObject.createdAt = triggerObject.createdAt
    ? moment(triggerObject.createdAt).format(process.env.SYSTEM_DATE_FORMAT)
    : "N/A";
  triggerObject.updatedAt = triggerObject.updatedAt
    ? moment(triggerObject.updatedAt).format(process.env.SYSTEM_DATE_FORMAT)
    : "N/A";

  return triggerObject;
};

const Trigger = mongoose.model("Trigger", TriggerSchema);

module.exports = Trigger;
