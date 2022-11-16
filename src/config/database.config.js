//Import the mongoose module
var mongoose = require("mongoose");

//Set up default mongoose connection
const uri = process.env.DATABASE_URL;

function connect(callback) {
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });

  //Get the default connection
  var connection = mongoose.connection;

  //Bind connection to error event (to get notification of connection errors)
  // connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

  connection.once("open", () => {
    console.log("MongoDB database connection established successfully");
  });
  callback();
}

function close() {
  mongoose.close();
}

module.exports = {
  connect,
  close,
};
