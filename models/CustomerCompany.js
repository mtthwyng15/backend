const mongoose = require("mongoose");
// const { INTEGER } = require("sequelize/types");
mongoose.Promise = global.Promise;

const connection = mongoose.createConnection(
  "mongodb://localhost:27017/sample0001"
);

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
