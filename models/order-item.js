const sequelize = require("../util/database");
const Sequelize = require("sequelize");

const OrderItem = sequelize.define("orderItem", {
  id: {
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  quantity: Sequelize.INTEGER,
});

module.exports = OrderItem;
