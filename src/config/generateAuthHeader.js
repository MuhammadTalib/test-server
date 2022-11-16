const CryptoJS = require("crypto-js");
const Base64 = require("crypto-js/enc-base64");
const { nanoid } = require("nanoid");

const generateSignatureString = ({
  url,
  method,
  data,
  nonce,
  timestamp,
  appId,
}) => {
  let stringData = {
    appId,
    method: method.toLowerCase(),
    uri: url,
    timestamp,
    nonce,
  };

  if (data && Object.keys(JSON.parse(data)).length > 0) {
    var rawStr = data;
    var wordArray = CryptoJS.enc.Utf8.parse(rawStr);
    var base64 = CryptoJS.enc.Base64.stringify(wordArray);
    stringData["payload"] = base64;
  }
  return JSON.stringify(stringData);
};

function generateHmacSignatureString({
  headers,
  url,
  method,
  data,
  nonce,
  timestamp,
  appId,
}) {
  let stringData = {
    appId,
    method: method.toLowerCase(),
    uri: url,
    timestamp: String(timestamp),
    nonce,
  };

  if (data && headers["Content-Type"] !== "multipart/form-data") {
    var rawStr = data;
    var wordArray = CryptoJS.enc.Utf8.parse(rawStr);
    var base64 = CryptoJS.enc.Base64.stringify(wordArray);
    stringData["payload"] = base64;
  }
  return JSON.stringify(stringData);
}

const createHmacSHA256 = (message, key) => {
  return Base64.stringify(CryptoJS.HmacSHA256(message, key));
};

const matchSignature = (signature, reqSignature) => {
  return signature === reqSignature;
};

const generateAuthHeader = (config) => {
  let nonce = nanoid();
  let timestamp = Date.now();
  let appId = config.appId;

  if (!config.channelKey || !config.appId) {
    throw new Error("Access Denied!");
  }

  // Step 1
  let string = generateHmacSignatureString({
    ...config,
    nonce,
    timestamp,
    appId,
  });

  //Step 2
  let signature = createHmacSHA256(string, config.appId);

  //Step 3
  let AuthHeader = joinAuthHeader({ appId, signature, nonce, timestamp });

  return "amx " + AuthHeader;
};

function joinAuthHeader({ appId, signature, nonce, timestamp }) {
  return appId + ":" + signature + ":" + nonce + ":" + timestamp;
}

module.exports = {
  generateSignatureString,
  createHmacSHA256,
  matchSignature,
  generateAuthHeader,
};
