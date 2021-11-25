const express = require("express");
const router = express.Router();
// const {dataControllers} = require('../controllers/dataController')
// const customerController = require("../controllers/customerController");
const db = require("./../models");
const Order = require("./../models/Order");
const OrderItem = require("./../models/orderItem");
const Deliveries = require("./../models/deliveries");

// Home page

router.get("/", (req, res) => {
  Order.findAll().then((order) => {
    console.log(order);
    res.send(order);
  });
});

router.get("/orderItem", (req, res) => {
  OrderItem.findAll().then((order) => {
    console.log(order);
    res.send(order);
  });
});

router.get("/deliveries", (req, res) => {
  Deliveries.findAll().then((deliveries) => {
    console.log(deliveries);
    res.send(deliveries);
  });
});

module.exports = router;
