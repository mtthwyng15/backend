const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const customerSchema = new mongoose.Schema({
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
    required: true,
  },
  credit_cards: {
    type: Number,
    required: true,
  },
});

function load_customers(table) {
  fs.createReadStream(`./csv/customers.csv`)
    .pipe(csv())
    .on("data", (row) => {
      let a = 0;
      console.log(a);

      table.insertOne({
        user_id: row.user_id,
        login: row.login,
        password: row.password,
        name: row.name,
        company_id: row.company_id,
        credit_cards: row.credit_cards,
      });
    })
    .on("end", () => {
      console.log("CSV file successfully processed");
    });
}

module.exports = mongoose.model("Customer", customerSchema);
