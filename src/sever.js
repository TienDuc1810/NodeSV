require('dotenv').config();
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = process.env.POST || 3000;
const hostname = process.env.HOST_NAME;

configViewEngine(app);

const connection = mysql.createConnection({
  host:'localhost',
  port:3307,
  user:'root',
  password:'123456',
  database:'hoidanit'
});

connection.query(
  'select * from Users u',
  function(err, results, fields) {
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  }
);

app.use('/', webRoutes);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})