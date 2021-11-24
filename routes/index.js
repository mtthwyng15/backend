const express = require("express");
const router = express.Router();
// const {dataControllers} = require('../controllers/dataController')
// const customerController = require("../controllers/customerController");
const Order = require("./../models");

// Home page

router.get("/", (req, res) => {
  Order.findAll({ where: { customer_id: "ivan" } }).then((order) => {
    console.log(order);
    res.send(order);
  });
});

// router.get("/getOrders");

module.exports = router;
