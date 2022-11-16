module.exports = function (app) {
  var express = require("express");
  var router = express.Router();
  let projectService = require("../services/project.services");

  router.post("/getProjects", async (req, res) => {
    let response = await projectService.getProjects(req);
    res.send(response);
  });

  router.post("/createProject", async (req, res) => {
    let response = await projectService.createProject(req);
    res.send(response);
  });

  router.post("/generateJSON", async (req, res) => {
    let response = await projectService.generateJSON(req.body);
    res.send(response);
  });

  router.post("/savePreviewJSON", async (req, res) => {
    let response = await projectService.savePreviewJSON(req.body);
    res.send(response);
  });

  router.post("/deleteProjectById", async (req, res) => {
    let resposne = await projectService.deleteProjectById(req.body);
    res.json(resposne);
  });

  router.post("/projectManagement", async (req, res) => {
    let response = await projectService.projectManagement(req.body);
    res.send(response);
  });

  app.use("/project", router);
};
