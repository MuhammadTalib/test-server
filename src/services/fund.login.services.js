let FTLogin = require("../models/fund.login.model");

async function Login(req) {
  if (!req?.body?.username || !req?.body?.password) {
    return {
      code: 0,
      message: "User not found",
      content: null,
    };
  } else {
    return {
      code: 1,
      message: "Success",
      content: {
        sessionTime: new Date(),
        username: "David Milan",
        profile:
          "https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg",
      },
    };
  }
}

module.exports = {
  Login,
};
