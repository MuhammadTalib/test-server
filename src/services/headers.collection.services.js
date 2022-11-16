const HeadersCollection = require("../models/headers.collection.model");
const { success, error } = require("../utility/base.response");
const ObjectId = require("mongoose").Types.ObjectId;
const { ADD, EDIT, DELETE } = require("./../utils/constants");

async function addHeadersCollection(req) {
  return new Promise(async (res, rej) => {
    let headersCollection = new HeadersCollection(req);
    let result = await headersCollection.save();
    if (result) {
      res(success("apis.addHeadersCollection.success"));
    } else {
      rej(error("apis.addHeadersCollection.failed"));
    }
  });
}

async function editHeadersCollection(req) {
  return new Promise(async (res, rej) => {
    let headersCollection = await HeadersCollection.findOne({
      _id: ObjectId(req._id),
    });
    if (headersCollection) {
      headersCollection.name = req.name;
      headersCollection.status = req.status;
      headersCollection.headers = req.headers;
      let result = await headersCollection.save();
      if (result) {
        res(success("apis.editHeadersCollection.success"));
      } else {
        rej(error("apis.editHeadersCollection.failed"));
      }
    }
  });
}

async function deleteHeadersCollection(req) {
  return new Promise((res, rej) => {
    HeadersCollection.deleteOne({ _id: ObjectId(req._id) })
      .then((result) => {
        res(success("apis.deleteHeadersCollection.success"));
      })
      .catch((err) => {
        rej(error("apis.deleteHeadersCollection.failed"));
      });
  });
}

async function getHeadersCollection(req) {
  return new Promise((res, rej) => {
    HeadersCollection.find()
      .then((result) => {
        res(success("apis.getHeadersCollection.success", result));
      })
      .catch((err) => {
        rej(error("apis.getHeadersCollection.failed"));
      });
  });
}

async function headersCollectionManagement(req) {
  if (req.action === ADD) {
    // addTrigger
    return addHeadersCollection(req);
  }
  if (req.action === EDIT) {
    // editTrigger
    return editHeadersCollection(req);
  }
  if (req.action === DELETE) {
    // deleteTrigger
    return deleteHeadersCollection(req);
  }
}

module.exports = {
  getHeadersCollection,
  headersCollectionManagement,
};
