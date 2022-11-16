module.exports = function (app) {
  var express = require("express");
  var router = express.Router();
  let componentService = require("../services/component.services");

  router.post("/getComponents", async (req, res) => {
    let response = await componentService.getComponents(req);
    res.send(response);
  });

  router.post("/getSystemComponents", async (req, res) => {
    let resposne = await componentService.getSystemComponents(req.body);
    res.json(resposne);
  });

  router.post("/addComponent", async (req, res) => {
    let response = await componentService.addComponent(req.body);
    res.send(response);
  });

  router.post("/addComponents", async (req, res) => {
    let response = await componentService.addComponents(req);
    res.send(response);
  });

  router.post("/addDocumentation", async (req, res) => {
    let resposne = await componentService.addDocumentation(req.body);
    res.json(resposne);
  });

  router.post("/addSystemComponentDocumentation", async (req, res) => {
    let resposne = await componentService.addSystemCompDocumentation(req.body);
    res.json(resposne);
  });

  router.post("/deleteComponentsByProjectID", async (req, res) => {
    let resposne = await componentService.deleteComponentsByProjectID(req.body);
    res.json(resposne);
  });

  router.post("/deleteComponent", async (req, res) => {
    let resposne = await componentService.deleteComponent(req.body);
    res.send(resposne);
  });

  router.post("/componentManagement", async (req, res) => {
    let response = await componentService.componentManagement(req.body);
    res.send(response);
  });

  app.use("/component", router);
};
