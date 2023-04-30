const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-tut", "root", null, {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
