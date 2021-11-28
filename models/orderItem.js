const { Sequelize, DataTypes } = require("sequelize");
const Deliveries = require("./deliveries");
const Order = require("./Order");

require("dotenv").config({ path: "variables.env" });
const sequelize = new Sequelize(
  `postgres://${process.env.POSTGRES_USERNAME}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DB_NAME}`
);

const orderItem = sequelize.define(
  "OrderItem",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Order,
        key: "order_id",
      },
      field: "order_id",
    },
    price_per_unit: {
      type: DataTypes.DOUBLE,
      field: "price_per_unit",
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    product: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { freezeTableName: true, timestamps: false }
);

orderItem.hasMany(Deliveries, {
  foreignKey: "id",
});

orderItem.associate = (model) => {
  orderItem.belongsTo(model.Order, {
    foreignKey: "order_id",
  });
};

module.exports = orderItem;
