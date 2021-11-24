const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const customerSchema = new mongoose.Schema({
  customer_id: {
    type: Number,
    required: true,
  },
  customer_company: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Customer", customerSchema);
