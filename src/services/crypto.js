const CryptoJS = require("crypto-js");

const encrypt = (key, data) => {
  return CryptoJS.AES.encrypt(JSON.stringify(data), key).toString();
};

const decrypt = (key, data) => {
  return new Promise((resolve, reject) => {
    if (!data) {
      reject(null);
    }
    let bytes = CryptoJS.AES.decrypt(data, process.env.KEY);
    bytes = bytes.toString(CryptoJS.enc.Utf8);
    if (bytes) {
      resolve(bytes);
    } else reject(null);
  });
};

const createHmac256 = (clientKey, msg) => {
  return CryptoJS.HmacSHA256(msg, clientKey);
};

module.exports = { encrypt, decrypt, createHmac256 };
