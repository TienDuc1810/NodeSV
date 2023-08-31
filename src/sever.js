require('dotenv').config();
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const express = require('express');

const app = express();
const port = process.env.POST || 3000;
const hostname = process.env.HOST_NAME;

configViewEngine(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use('/', webRoutes);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})