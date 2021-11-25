const sequelize = require("sequelize");

var db = {};

var conn = new sequelize.Sequelize(
  process.env.POSTGRES_DB_NAME,
  "postgres",
  "postgres",
  { dialect: "postgres" }
);

db.sequelize = conn;
db.Sequelize = conn;

module.exports = db;
