const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const mongoose = require("mongoose");

var _db;

// const mongoConnect = (callback) => {
//   MongoClient.connect(
//     // "mongodb+srv://samuel:lGqeTf9qbUxdg8ww@cluster0.5y1nvtp.mongodb.net/?retryWrites=true&w=majority"
//     "mongodb+srv://samuel:lGqeTf9qbUxdg8ww@cluster0.5y1nvtp.mongodb.net/test"
//   )
//     .then((client) => {
//       _db = client.db("shop");
//       callback();
//     })
//     .catch((err) => {
//       console.log(err);
//       throw err;
//     });
// };

const DBCONNECT = (callback) => {
  try {
    mongoose.connect("mongodb+srv://samuel:lGqeTf9qbUxdg8ww@cluster0.5y1nvtp.mongodb.net/?retryWrites=true&w=majority");
    console.log(
      `Database connected in 🚀`
    );
    callback();
  } catch (error) {
    console.log(error);
    throw new Error("Error connecting to database");
  }
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No database found";
};

exports.mongoConnect = DBCONNECT;
exports.getDb = getDb;
