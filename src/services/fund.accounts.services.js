const { nanoid } = require("nanoid");
let FTTransferss = require("../models/fund.accounts.model");

async function getTransfers(req) {
  let getFTTransferss = await FTTransferss.findOne(req.query)
    .then((result) => {
      if (result) {
        return { code: 1, message: "Success", data: result };
      } else {
        return { code: 1, message: "No record found", data: [] };
      }
    })
    .catch((err) => {
      return { code: 0, message: "No record found", content: null };
    });
  return getFTTransferss;
}

async function getAllTransferss() {
  let allTransferss = await FTTransferss.find({})
    .then((result) => {
      if (result) {
        return { code: 1, message: "Success fetched data", data: result };
      } else {
        return { code: 1, message: "No record found", data: [] };
      }
    })
    .catch((err) => {
      return { code: 0, message: "No record found", content: null };
    });
  return allTransferss;
}

async function addFTTransfers(req) {
  if (req.body.amount >= 500000) {
    return { code: 0, message: "Insuficeint balance.", data: null };
  }
  const account = new FTTransferss({
    fromInstrument: req.body.fromInstrument,
    toInstrument: req.body.toInstrument,
    amount: req.body.amount,
    comments: req.body.comments,
    transferType: req.body.transferType,
  });
  let response = await account
    .save()
    .then((result) => {
      let _result = { ...result, transactionId: nanoid() };
      return {
        code: 1,
        message: "Successfully transfer amount",
        data: _result,
      };
    })
    .catch((err) => {
      return { code: 0, message: "Unable to transfer amount", content: null };
    });
  return response;
}

async function editFTTransfer(req) {
  let editTransfer = await FTTransferss.findOneAndUpdate(
    { _id: req.body._id },
    {
      fromInstrument: req.body.fromInstrument,
      toIntrument: req.body.toIntrument,
      amount: req.body.amount,
      comments: req.body.comments,
      transferType: req.body.transferType,
    }
  )
    .then((result) => {
      if (result) {
        return { code: 1, message: "Successfully updated data", data: result };
      } else {
        return { code: 1, message: "No record found", data: [] };
      }
    })
    .catch((err) => {
      return { code: 0, message: "Unable to update data", content: null };
    });
  return editTransfer;
}

async function deleteFTTransfer(req) {
  let response = await FTTransferss.findOneAndDelete({ _id: req.body._id })
    .then((result) => {
      if (result) {
        return { code: 1, message: "Successfully deleted data", data: result };
      } else {
        return { code: 1, message: "No record to delete", data: [] };
      }
    })
    .catch((err) => {
      return { code: 0, message: "Unable to delete data", content: null };
    });

  return response;
}

module.exports = {
  getTransfers,
  getAllTransferss,
  addFTTransfers,
  editFTTransfer,
  deleteFTTransfer,
};
