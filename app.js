const express = require("express");
const routes = require("./routes/index");
const db = require("././models");

const Order = require("././models/Order");
const OrderItem = require("././models/orderItem");
const Deliveries = require("././models/deliveries");
const app = express();
const port = 3000;

app.get("/", function (req, res) {
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
  OrderItem.findAll().then((order) => {
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

db.sequelize.sync().then((req) => {
  app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
  });
});

// app.use("/", routes);

module.exports = app;
