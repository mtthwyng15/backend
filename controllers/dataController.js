const mongoose = require("mongoose");
// const Orders = mongoose.model("CustomerCompany");
const { getOrders } = require("./models");

exports.homepage = (req, res) => {
  res.render("index");
};

exports.getOrders = async (req, res) => {
  try {
    const orders = await Orders.findAll();
    res.render("Orders", { title: "Orders" }, orders);
  } catch (error) {
    throw error;
  }
};
