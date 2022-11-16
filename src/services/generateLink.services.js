const { encrypt } = require("./crypto");

const generateForgotPasswordLink = (name, page) => {
  let encryptedData = encrypt(
    process.env.KEY,
    JSON.stringify({ name, timestamp: new Date() })
  );
  return process.env.clientURL + page + "/" + encryptedData;
};

module.exports = { generateForgotPasswordLink };
