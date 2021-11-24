const mongoose = require("mongoose");
// const Orders = mongoose.model("CustomerCompany");

//TODO: move to model directory

const { MongoClient } = require("mongodb");
mongoose.Promise = global.Promise;
const fs = require("fs");
const csv = require("csv-parser");
const { Server } = require("http");

const customerCompanySchema = new mongoose.Schema({
  company_id: {
    type: String,
    required: true,
  },
  company_name: {
    type: String,
    required: true,
  },
});

// module.exports = mongoose.model('CustomerCompany', customerCompanySchema);


exports.homepage = (req, res) => {
  res.render("index");
};

exports.getOrders = async (req, res) => {
  try {
    const orders = await Orders.find();
    res.render("Orders", { title: "Orders" }, orders);
  } catch (error) {
    throw error;
  }
};
