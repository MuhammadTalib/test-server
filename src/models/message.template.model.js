const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageTemplateSchema = new Schema({
  template: {
    type: String,
  },
  name: {
    type: String,
    required: true
  },
  subject: {
    type: String,
  }
});

const MessageTemplate = mongoose.model("MessageTemplate", MessageTemplateSchema);

module.exports = MessageTemplate;
