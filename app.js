const express = require('express');
const routes = require('./routes/index');

const app = express();
const port = 3000

app.get('/', function(req, res) {
  res.send('Hello World!')
});

app.listen(port, function() {
  console.log(`Example app listening on port ${port}!`)
});

app.use('/', routes)

module.exports = app