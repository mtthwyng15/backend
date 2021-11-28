const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const CustomerCompany = require("./CustomerCompany");

const customerSchema = new mongoose.Schema(
  {
    user_id: {
      type: String,
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
      type: String,
      // ref: CustomerCompany,
      required: true,
    },
    credit_cards: {
      type: String,
      required: true,
    },
  },
  { Collection: "Customers" }
);
module.exports = mongoose.model("customers", customerSchema);
