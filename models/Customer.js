const mongoose = require("mongoose");
const CustomerCompany = require("./CustomerCompany");
mongoose.Promise = global.Promise;

const connection = mongoose.createConnection(
  "mongodb://localhost:27017/sample0001"
);

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

console.log("-------------");
console.log(customerSchema);
module.exports = mongoose.model("Customer", customerSchema);
