const i18n = require("i18n");

exports.success = (message, content) => {
  return {
    code: 1,
    message: i18n.__(message),
    content: content,
  };
};

exports.error = (message, content) => {
  return {
    code: 0,
    message: i18n.__(message),
    content: content,
  };
};
