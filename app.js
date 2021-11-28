const express = require("express");
const routes = require("./routes/index");
const db = require("././models");
const mongoose = require("mongoose");

const connection = mongoose.createConnection(
  "mongodb://localhost:27017/sample0001"
);

const Order = require("././models/Order");
const OrderItem = require("././models/orderItem");
const Deliveries = require("././models/deliveries");
const Customer = require("././models/Customer");
const CustomerCompany = require("./models/CustomerCompany");
const app = express();
const port = 4000;

app.get("/Order", function (req, res) {
  //  res.send("Hello World!");

  Order.findAll()
    .then((Order) => {
      res.send(Order);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/orderItem", (req, res) => {
  console.log("order item ------------------------");
  // OrderItem.findOne({ where: { order_id: 1 } }).then((order) =>{
  OrderItem.findAll({
    // include: [db.order_name],
    // include: "Order",
    // include: [
    //   {
    //     model: Order,
    //     required: true,
    //   },
    // ],
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

app.get("/Customer", (req, res) => {
  Customer.find().then((customer) => {
    console.log(customer);
    res.send(customer);
  });
});

app.get("/CustomerCompany", (req, res) => {
  CustomerCompany.find().then((company) => {
    console.log(company);
    res.send(company);
  });
});

db.sequelize.sync().then((req) => {
  app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
  });
});

// app.use("/", routes);

module.exports = app;
