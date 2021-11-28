const { Sequelize, DataTypes } = require("sequelize");
const OrderItem = require("./orderItem");

require("dotenv").config({ path: "variables.env" });
const sequelize = new Sequelize(
  `postgres://${process.env.POSTGRES_USERNAME}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DB_NAME}`
);

const Order = sequelize.define(
  "Order",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      field: "created_at",
    },
    order_name: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "order_name",
    },
    customer_id: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "customer_id",
    },
  },
  { freezeTableName: true, timestamps: false }
);

Order.hasMany(OrderItem, { foreignKey: "id" });

Order.associate = (model) => {
  Order.hasMany(model.orderItem, {
    foreignKey: "id",
  });
};

module.exports = Order;
