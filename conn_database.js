const { Sequelize, DataTypes, QueryInterface, DOUBLE } = require("sequelize");
const csv = require("csv-parser");
const fs = require("fs");

const databaseName = "test0009";


function load_orders(queryInterface, table) {
  fs.createReadStream(`./csv/Orders.csv`)
    .pipe(csv())
    .on("data", (row) => {
      insertOrders(queryInterface, row);
    })
    .on("end", () => {
      console.log("CSV file successfully processed");
    });
}

function load_deliveries(queryInterface, table) {
    fs.createReadStream(`./csv/deliveries.csv`)
      .pipe(csv())
      .on("data", (row) => {
          console.log(row)
        insertdeliveries(queryInterface, row);
      })
      .on("end", () => {
        console.log("CSV file successfully processed");
      });
  }

  function load_order_items(queryInterface, table) {
    fs.createReadStream(`./csv/order_items.csv`)
      .pipe(csv())
      .on("data", (row) => {
        insertOrderItem(queryInterface, row);
      })
      .on("end", () => {
        console.log("CSV file successfully processed");
      });
  }

function createDb() {
  console.log(databaseName);
  var pgtools = require("pgtools");
  pgtools.createdb(
    {
      user: "postgres",
      password: "postgres",
      port: 5432,
      host: "localhost",
    },
    databaseName,
    function (err, res) {
      // TODO: Handle db exists
      if (err) {
        console.error(err);
      }
      console.log(res);
    }
  );
}

async function initialiseDatabase() {
  try {
    const conn = new Sequelize(
      `postgres://postgres:postgres@localhost:5432/${databaseName}`
    );
    await conn.authenticate();
    // console.log("Connection has been established successfully.");

    const queryInterface = conn.getQueryInterface();

    const orders = createOrdersTable(queryInterface);
    const order_items = createOrderItemsTable(queryInterface);
    const deliveries = createDeliveries(queryInterface);
    console.log("create table successfully...");
    load_orders(queryInterface, "Orders");
    load_order_items(queryInterface, "OrderItem");
    load_deliveries(queryInterface, "LoadDeliveries");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

function createOrdersTable(queryInterface) {
  return queryInterface.createTable("Order", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    order_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    customer_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
}

function insertOrders(queryInterface, row) {
  console.log(row);
  queryInterface.bulkInsert(
    "Order",
    [
      {
        id: row.id,
        created_at: row.created_at,
        order_name: row.order_name,
        customer_id: row.customer_id,
      },
    ],
    {}
  );
}

function createOrderItemsTable(queryInterface) {
    return queryInterface.createTable("OrderItem", {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      order_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
      },
      price_per_unit: {
       type: DataTypes.DOUBLE,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      product: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  }

  function insertOrderItem(queryInterface, row) {

    let a = row.price_per_unit
    if (!row.price_per_unit) {
        a = "0"
    }
    queryInterface.bulkInsert(
      "OrderItem",
      [
        {
          id: row.id,
          order_id: row.order_id,
          price_per_unit: parseFloat(a),
          quantity: row.quantity,
          product: row.product,
        },
      ],
      {}
    );
  }

  function createDeliveries(queryInterface) {
    return queryInterface.createTable("Deliveries", {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      order_item_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      delivered_quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });
  }
  
  function insertdeliveries(queryInterface, row) {
    console.log(row);
    queryInterface.bulkInsert(
      "Deliveries",
      [
        {
          id: row.id,
          order_item_id: row.order_item_id,
          delivered_quantity: row.delivered_quantity,
        },
      ],
      {}
    );
  }



createDb();
initialiseDatabase();
