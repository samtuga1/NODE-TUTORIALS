const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

var _db;

const mongoConnect = (callback) => {
  MongoClient.connect(
    // "mongodb+srv://samuel:lGqeTf9qbUxdg8ww@cluster0.5y1nvtp.mongodb.net/?retryWrites=true&w=majority"
    "mongodb+srv://samuel:lGqeTf9qbUxdg8ww@cluster0.5y1nvtp.mongodb.net/test"
  )
    .then((client) => {
      _db = client.db("shop");
      callback();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No database found";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
