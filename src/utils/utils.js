const UserActivityLog = require("../models/user.activity.log.model");
const MessageTemplate = require("../models/message.template.model");
const Permission = require("../models/permission.model");
const Constants = require("./constants");
const { nanoid } = require("nanoid");
const { NAVIGATION, SYSTEM, USER } = require("./constants");
const objectPath = require("object-path");

const checkInSecureUrls = (baseUrl) => {
  const insecureUrls = [
    //prelogin
    "/prelogin/login",
    "/prelogin/activateUser",
    "/prelogin/registration",
    "/prelogin/checkAvailability",
    "/prelogin/forgotpassword",
    "/prelogin/resetpassword",
    "/prelogin/validateLink",
    "/prelogin/getProjectConfiguration",
    //preview
    "/preview/getPreview",
    "/preview/getPreviewById",
    "/preview/previewManagement",
    "asset/getAssets",
    "asset/test",
    "FT/getMenus",
  ];
  return insecureUrls.indexOf(baseUrl) > -1;
};

module.exports = {
  checkInSecureUrls,
  profileImage:
    "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/WyhVY8qDWQynzkGkJqZ1QdSvAVA9zI8WbdmYvZt0wxIRZ6od68euHy5CvsPuLQMwMjo2LjcgwdKXPpawdP4zB6ABvEXuLDrP6BfPH7+07kGJCJPtmD+T1zd4wvQNMtLqvOYxScKIDlzxhwhMV7vuNCQEDzy0CJYrT6zI0QtZLVa8djD9yMszJUVnGRKakbWbOWhTOD1r/z09DltNNH8IQDd39v96sF70C8+1oBU5A1CgoMREdEFn3z6mf7BQozunhDzt8P79xt4t1Pjef0eQIOlfjEA3TfWm5AyDuPGjjIgEXmTsaNGIHW8S9eJdbY32B5RncfdvL4ABPBTvWMiunTGPQt+ZkQc8kKLFtzl0krOUsDrX0ReXQCpU2Z1BRChd9x9v5zvs7fgJv2Cg4Nw78L5rgztfPU16LW8ugCaG6Xu1ThvGXMzhg5xeV0Q8lE3DR2MsaNG6B7X3NTg1YtCenUBBODrSgAtXgQuODgIC38+z8BE5M0W3v1TBAfrek+p1WrOHzcqjzt4dQEUFBTUSylavJ77vLmzuKoPXVPHDu0xb+6slg+QctWmTZuajEtkPK8uAAAQUvs1gB/9JfTvF4+pmRPdkIi82dTMiUho2VfDDRC2J43OYzSvPw+gorzkVO+YuEOAmIxr/Dw9e3THk0seQUhwsJvTkbcRQmBY4mB8vnM3Ll665lWDDVKIOzeseW+TO7MZwesLAAAqykr2RMck5EugM4A+uLpnE96uLbJuzcTDDyxCG5fO+CJ/FBwUhAmp4xDgCMDJU6dRXV3zzX81SCnypVW7Y+PqFYVmZlTF99YDSLsjJKittdff/vzCno4d2psdh3zApUtf465f3h9Tc+H00YKCgnqz8xAREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREZEK/ws2rPsq0m89egAAAABJRU5ErkJggg==",

  logUserActivity: async (req) => {
    try {
      let template = await MessageTemplate.findOne({ name: req.originalUrl })
        .then((template) => {
          return template;
        })
        .catch((err) => {
          {
            descript: null;
          }
        });
      let permission = await Permission.findOne({
        name: req.originalUrl,
        type: Constants.API_TYPE,
      })
        .then((permission) => {
          return permission;
        })
        .catch((err) => {
          console.log(err);
          return null;
        });

      let actions = {
        ADD: "added",
        EDIT: "edited",
        DELETE: "deleted",
      };
      let templateDetails = { ...req.body, action: actions[req.body.action] };

      let userActivity = {
        uri: req.originalUrl,
        username: req.body?.user?.username,
        body: req.body,
        userDevice: req.body.device,
        method: req.method,
        description:
          template == null
            ? req.originalUrl
            : template?.template.replace(/{\w+}/g, (placeholder) => {
                return objectPath.get(
                  templateDetails,
                  placeholder.substring(1, placeholder.length - 1),
                  placeholder
                );
              }),
        sessionId: req.body.user?.sessionId,
        action: req.body.action,
        type: permission == null ? null : permission.subType,
      };
      UserActivityLog.create(userActivity);
    } catch (err) {
      console.log("error", err);
    }
  },
};
