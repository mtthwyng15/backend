const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const customerCompanySchema = new mongoose.Schema(
  {
    company_id: {
      type: Number,
      required: true,
    },
    company_name: {
      type: String,
      required: true,
    },
  },
  { Collection: "CustomerCompany" }
);

module.exports = mongoose.model("CustomerCompany", customerCompanySchema);
