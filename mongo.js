const { MongoClient } = require("mongodb");
const fs = require("fs");
const csv = require("csv-parser");
const { Server } = require("http");

const url =
  "mongodb://myUserAdmin:abc123@localhost:27017/?maxPoolSize=20&w=majority";

const client = new MongoClient(url);

async function run() {
  try {
    // Connect the client to the server
    await client.connect();
    // Establish and verify connection
    // await client.db("admin").command({ ping: 1 });
    console.log("Connected successfully to server");

    // database name
    const database = client.db("test");
    // table name
    const customerTable = database.collection("Customers")
    const customerCompanyTable = database.collection("Customer Company")
    console.log(customerTable);
    console.log(customerCompanyTable);

    load_customers(customerTable);
    load_customerCompanies(customerCompanyTable);

    
  } catch (err) {
    console.log(err);
  } finally {
    // Ensures that the client will close when you finish/error

    // Todo: improve how and when to disconnnect client connection
    // This is just a workaround for now, if it is not enough just increase the timeout
    await sleep(5000)
    await client.close();
  }
}
run().catch(console.dir);


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

function load_customerCompanies(table){
    fs.createReadStream(`./csv/customer_companies.csv`)
    .pipe(csv())
    .on("data", (row) => {
      let a = 0;
      console.log(a);

      table.insertOne({
        company_id: row.company_id,
        company_name: row.company_name
      });
    })
    .on("end", () => {
      console.log("CSV file successfully processed");

    }); 
}


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}