const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://samuel:Phantom1290.@cluster0.5y1nvtp.mongodb.net/?retryWrites=true&w=majority"
  )
    .then((client) => {
      callback(client);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = mongoConnect;
