const mongoose = require("mongoose");

// import environmental variables from our variables.env file
require("dotenv").config({ path: "variables.env" });

const MONGODB_URL = process.env.MONGODB;
const port = 3000;

console.log(MONGODB_URL);
mongoose.connect(MONGODB_URL);
mongoose.Promise = global.Promise;
mongoose.connection.on("error", (err) => {
  console.error(err);
});

require("./models/Customer");

const app = require("./app");
const server = app.listen(app.get("port"), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
