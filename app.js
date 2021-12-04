const express = require("express");
const routes = require("./routes/index");
const db = require("././models");
const mongoose = require("mongoose");
require("dotenv").config({ path: "variables.env" });
const url = process.env.MONGODB;
// const connection = mongoose.createConnection(url);
// const client = new MongoClient(url);
mongoose.connect(url);
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
mongoose.connection.on("error", (err) => {
  console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
});

const Order = require("././models/Order");
const OrderItem = require("././models/orderItem");
const Deliveries = require("././models/deliveries");
const Customer = require("./models/Customer");
const CustomerCompany = require("./models/CustomerCompany");
const orderItem = require("././models/orderItem");
const deliveries = require("././models/deliveries");
const app = express();
const port = 4000;

app.get("/Order", async function (req, res) {
  const customers = await Customer.getCompany();

  const items = await Promise.all(
    customers.map(async function (customer) {
      const userOrders = await Order.findAll({
        attributes: ["created_at", "order_name", "customer_id"],
        include: [
          {
            model: orderItem,
            attributes: ["price_per_unit", "quantity", "product"],
            include: [
              {
                model: deliveries,
                attributes: ["delivered_quantity"],
              },
            ],
          },
        ],
        where: { customer_id: customer.user_id },
      });

      return {
        customer_name: customer.name,
        company_name: customer.gatherCompany[0].company_name,
        orders: userOrders,
      };
    })
  );

  res.send(items);
});

app.get("/orderItem", (req, res) => {
  OrderItem.findAll({
    include: deliveries,
  }).then((order) => {
    console.log(order);
    res.send(order);
  });
});

app.get("/deliveries", (req, res) => {
  Deliveries.findAll().then((deliveries) => {
    console.log(deliveries);
    res.send(deliveries);
  });
});

app.get("/Customer", async (req, res) => {
  // const customer = await Customer.find();
  const customer = await Customer.getCompany();
  res.json(customer);
});

app.get("/CustomerCompany", (req, res) => {
  CustomerCompany.find().then((company) => {
    console.log(company);
    res.send(company);
  });
});

db.sequelize.sync().then((req) => {
  app.listen(port, function () {
    console.log(`App listening on port ${port}!`);
  });
});

// app.use("/", routes);

module.exports = app;
