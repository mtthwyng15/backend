module.exports = (sequelize, DataTypes) => {
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
      },
      order_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      customer_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {}
  );

  return Order;
};
