const { Sequelize, DataTypes } = require("sequelize");
const orderItem = require("./orderItem");
// const Order = require("./Order");
// const OrderItem = require("./orderItem");

require("dotenv").config({ path: "variables.env" });
const sequelize = new Sequelize(
  `postgres://${process.env.POSTGRES_USERNAME}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DB_NAME}`
);

const deliveries = sequelize.define(
  "Deliveries",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    order_item_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: orderItem,
        key: "order_item_id",
      },
      field: "order_item_id",
    },
    delivered_quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "delivered_quantity",
    },
  },
  { freezeTableName: true, timestamps: false }
);

deliveries.associate = (model) => {
  deliveries.belongsTo(model.OrderItem, {
    foreignKey: "order_item_id",
  });
};

module.exports = deliveries;
