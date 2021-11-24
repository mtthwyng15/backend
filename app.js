const express = require("express");
const routes = require("./routes/index");
const db = require("././models");

const { Order } = require("././models/Order");
const app = express();
const port = 3000;

app.get("/", function (req, res) {
  //  res.send("Hello World!");
  Order.findAll()
    .then((Order) => {
      res.send(Order);
    })
    .catch((err) => {
      console.log(err);
    });
  res.send("WORLD!!");
});

db.sequelize.sync().then((req) => {
  app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
  });
});

// app.use("/", routes);

module.exports = app;
