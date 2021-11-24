const sequelize = require("sequelize");

var db = {};

//module.exports = (sequelize, DataTypes) => {
//const Orders = sequelize.define(
//"Orders",
//{
//id: {
//type: DataTypes.INTEGER,
//allowNull: false,
//primaryKey: true,
//},
//created_at: {
//type: DataTypes.DATE,
//allowNull: false,
//},
//order_name: {
//type: DataTypes.STRING,
//allowNull: false,
//},
//customer_id: {
//type: DataTypes.STRING,
//allowNull: false,
//},
//},
//{}
//);

//return Orders;
//};

var conn = new sequelize.Sequelize(
  process.env.POSTGRES_DB_NAME,
  "postgres",
  "postgres",
  { dialect: "postgres" }
);

db.sequelize = conn;
db.Sequelize = conn;

module.exports = db;
