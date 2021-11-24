const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");
const { INTEGER } = require("sequelize/types");
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

// fs.createReadStream(`./csv/customer_companies.csv`)`
// .pipe(csv())
// .on("data", (row) => {
//   let a = 0;
//   console.log(a);

//   table.insertOne({
//     company_id: row.company_id,
//     company_name: row.company_name
//   });
// })
// .on("end", () => {
//   console.log("CSV file successfully processed");

// });

module.exports = mongoose.model('CustomerCompany', customerCompanySchema);
