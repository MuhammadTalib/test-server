module.exports = function (app) {
  var express = require("express");
  var passport = require("passport");
  var router = express.Router();
  let preloginService = require("../services/prelogin.services");
  const { error } = require("../utility/base.response");

  //prelogin routes
  router.post(
    "/login",
    (req, res, next) => {
      passport.authenticate("local", function (err, user, info) {
        if (user) {
          req.user = user;
          next();
        } else {
          return res.json(error(info?.message));
        }
      })(req, res, next);
    },
    async (req, res) => {
      try {
        let response = await preloginService.login(req.body);
        res.send(response);
      } catch (error) {
        console.log("error", error);
        res.send(error);
      }
    }
  );

  router.post("/activateUser", async (req, res) => {
    let response = await preloginService.activateUser(req.body);
    res.send(response);
  });

  router.post("/registration", async (req, res) => {
    let response = await preloginService.register(req.body);
    res.send(response);
  });

  router.post("/checkAvailability", async (req, res) => {
    let response = await preloginService.checkAvailability(req.body);
    res.send(response);
  });

  router.post("/forgotpassword", async (req, res) => {
    let response = await preloginService.forgotpassword(req.body);
    res.send(response);
  });

  router.post("/resetpassword", async (req, res) => {
    let response = await preloginService.resetpassword(req.body);
    res.send(response);
  });

  router.post("/validateLink", async (req, res) => {
    let response = await preloginService.validateLink(req.body);
    res.send(response);
  });

  router.post("/getProjectConfiguration", async (req, res) => {
    try {
      let response = await preloginService.getProjectConfiguration(req.body);
      res.send(response);
    } catch (error) {
      console.log("error", error);
      res.send(error);
    }
  });

  router.post("/getAssets", async (req, res) => {
    let response = await assetsService.getAssets(req.body);
    res.send(response);
  });

  router.get("/get", async (req, res) => {
    res.send({ message: "Successful", allowableAge: "22" });
    // res.status(500).send({ message: "Error occured" });
  });

  router.post("/post", async (req, res) => {
    res.send({ message: "Successful" });
    // res.send([1, 2, 3, 4, 5, 6]);

    // res.status(500).send({ message: "Error occured" });
  });

  app.use("/prelogin", router);
};
