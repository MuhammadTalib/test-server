const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Project = require("./project.model");

const Projects = new Schema({
  project: {
    type: Schema.Types.ObjectId,
    ref: "Project",
  },
  next: {
    type: Number,
    required: true,
  },
});

const CounterSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    format: {
      type: String,
      trim: true,
    },
    projects: [Projects],
  },
  {
    timestamps: true,
  }
);

const Counter = mongoose.model("Counter", CounterSchema);
module.exports = Counter;
