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
      // ref: "customercompanies",
      required: true,
    },
    credit_cards: {
      type: String,
      required: true,
    },
  },
  { Collection: "Customers" }
);

customerSchema.statics.getCompany = function () {
  return this.aggregate([
    {
      $lookup: {
        from: "customercompanies",
        localField: "company_id",
        foreignField: "company_id",
        as: "gatherCompany",
      },
    },
  ]);
};
module.exports = mongoose.model("customers", customerSchema);
