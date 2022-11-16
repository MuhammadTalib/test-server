module.exports = function (app) {
  var express = require("express");
  var router = express.Router();

  let headersCollectionService = require("../services/headers.collection.services");

  router.post("/getHeadersCollection", async (req, res) => {
    let response = await headersCollectionService.getHeadersCollection(
      req.body
    );
    res.send(response);
  });

  router.post("/headersCollectionManagement", async (req, res) => {
    let response = await headersCollectionService.headersCollectionManagement(
      req.body
    );
    res.send(response);
  });

  app.use("/headersCollection", router);
};
