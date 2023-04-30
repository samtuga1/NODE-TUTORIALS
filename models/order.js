const sequelize = require("../util/database");
const Sequelize = require("sequelize");

const Order = sequelize.define("order", {
  id: {
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
});

module.exports = Order;
