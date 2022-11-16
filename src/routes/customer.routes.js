var express = require("express");
var router = express.Router();
let CustomerModel = require("../models/customers");

router.post("/save-form/:step", (req, res) => {
  const stepname = req.params.step;
  const userId = req.body.userId;
  const data = req.body[stepname];

  let options = { upsert: true, new: true, setDefaultsOnInsert: true };
  CustomerModel.findOneAndUpdate(
    { userId: "12345" },
    {
      personalInformation : data
    },
    options,
    function(error, result) {
    if (error) return;
    console.log('result',result)
     res.send("12345");
    // do something with the document
});
});

module.exports = router;
