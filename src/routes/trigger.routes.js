module.exports = function (app) {
  var express = require("express");
  var router = express.Router();
  let triggerService = require("../services/trigger.services");

  router.post("/getTriggers", async (req, res) => {
    let response = await triggerService.getTriggers(req.body);
    res.send(response);
  });

  router.post("/getTriggersByFilters", async (req, res) => {
    let response = await triggerService.getTriggersByFilters(req.body);
    res.send(response);
  });

  router.post("/addTrigger", async (req, res) => {
    let response = await triggerService.addTrigger(req);
    res.send(response);
  });

  router.post("/editTrigger", async (req, res) => {
    let response = await triggerService.editTrigger(req.body);
    res.send(response);
  });

  router.post("/deleteTrigger", async (req, res) => {
    let response = await triggerService.deleteTrigger(req.body);
    res.send(response);
  });

  router.post("/triggerManagement", async (req, res) => {
    let response = await triggerService.triggerManagement(req.body);
    res.send(response);
  });

  router.post("/addDocumentation", async (req, res) => {
    let response = await triggerService.addDocumentation(req.body);
    res.send(response);
  });

  router.post("/editTriggerWithId", async (req, res) => {
    let response = await triggerService.editTriggerWithId(req.body);
    res.send(response);
  });

  app.use("/trigger", router);
};
