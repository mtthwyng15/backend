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

app.get("/Order", function (req, res) {
  //  res.send("Hello World!");

  Order.findAll({
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
  })
    .then((orders) => {
      //const customer = Customer.getCompany(i);

      const payload = orders.map(function (order) {
        const customer = Customer.find({ user_id: order.customer_id });
        const val = customer.getFilter();

        console.log(val);

        // const company = CustomerCompany.find({
        //   company_id: customer.company_id,
        // });
        // company.getFilter();

        // customer.find({ company_id: customercompanies.company_id });
        // customer.getFilter();
        // console.log(customer);
        // console.log("---------------");
        // console.log(company);

        return {
          order_name: order.order_name,
          id: order.customer_id,
          // hello: "world",
          name: val.user_id,
          // company_name: customer.company_name,
        };
      });

      // const payload = {
      //   orders,
      //   hello: "world",
      // };

      res.send(payload);
    })

    .catch((err) => {
      console.log(err);
    });
});

app.get("/orderItem", (req, res) => {
  console.log("order item ------------------------");
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

  // const query = Customer.find({
  //   company_id: 1,
  // });
  // query.getFilter();

  // const err = await query.exec().then(
  //   () => null,
  //   (err) => err
  // );
  // console.log("------");
  // console.log(query);
  // console.log("------");
  // res.json(query);
});

// app.get("/Customer", async (req, res) => {
//   // const customer = await Customer.find();
//   const customer = await Customer.getCompany();
//   res.json(customer);
// });

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
