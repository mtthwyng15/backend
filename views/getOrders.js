require("dotenv").config({ path: "variables.env" });

const Order = require("./../models/Order");

async function connectDB() {
  const dbURL = `postgres://${process.env.POSTGRES_USERNAME}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DB_NAME}`;

  try {
    const conn = new Sequelize(dbURL);
    await conn.authenticate();
    // console.log("Connection has been established successfully.");
    return conn.getQueryInterface();
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

async function getOrder(Order) {
  const queryInterface = connectDB();
  //   queryInterface.get(select * order where id = orderId)
  // queryInterface.findAll
  //   const order = await getOrders.findAll();
  //   console.log(order);
}
