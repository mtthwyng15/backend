const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const customerCompanySchema = new mongoose.Schema(
  {
    company_id: {
      type: String,
      required: true,
    },
    company_name: {
      type: String,
      required: true,
    },
  },
  { Collection: "CustomerCompanies" }
);

module.exports = mongoose.model("customercompanies", customerCompanySchema);
