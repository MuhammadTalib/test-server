const Channels = require("../models/channel.model");
const mongoose = require("mongoose");
const { success, error } = require("../utility/base.response");
const { createHmac256 } = require("../services/crypto");
const Base64 = require("crypto-js/enc-base64");
const { nanoid } = require("nanoid");

async function addChannel(obj) {
  return new Promise(async (res, rej) => {
    let apiKey = Base64.stringify(
      createHmac256(nanoid(), JSON.stringify({ name: obj.appName }))
    );
    let app = {
      name: obj.appName,
      id: (await Channels.find().count({})) + 1,
      apiKey,
    };
    let result = await Channels.updateOne({ id: app.id }, app, {
      upsert: true,
    }).then((result) => {
      console.log("result", { appId: app.id, apiKey });
    });
  });
}

module.exports = {
  addChannel,
};
