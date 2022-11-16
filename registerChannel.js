//load configuration from .env file
const dotenv = require("dotenv");
require("./src/config/auth").strategy();
const { addChannel } = require("./src/services/channel.services");

//Step 1 : Load configuration
const envConfigurations = dotenv.config();
if (envConfigurations.error) {
  throw envConfigurations.error;
}

//Step 2 : connect to database
let db = require("./src/config/database.config");

const createApiKey = async () => {
  let [_, _1, name] = process.argv;
  let response = await addChannel({ appName: name });
  console.log("response", response);
};

db.connect(() => {
  createApiKey();
});
