const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const CustomerCompany = require("./CustomerCompany");

const customerSchema = new mongoose.Schema(
  {
    user_id: {
      type: Number,
      required: true,
    },
    login: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    company_id: {
      type: Number,
      // ref: CustomerCompany,
      required: true,
    },
    credit_cards: {
      type: Number,
      required: true,
    },
  },
  { Collection: "Customer" }
);
module.exports = mongoose.model("Customer", customerSchema);
