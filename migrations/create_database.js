require("dotenv").config({ path: "variables.env" });

function createDb(databaseName) {
  // console.log(databaseName);
  var pgtools = require("pgtools");
  pgtools.createdb(
    {
      user: process.env.POSTGRES_USERNAME,
      password: process.env.POSTGRES_PASSWORD,
      port: process.env.POSTGRES_PORT,
      host: process.env.POSTGRES_HOST,
    },
    databaseName,
    function (err, res) {
      // TODO: Handle db exists
      if (err) {
        console.error(err);
      }
      console.log("successfully created database");
    }
  );
}

createDb(`${process.env.POSTGRES_DB_NAME}`);
