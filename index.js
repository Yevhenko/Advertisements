require('dotenv').config();
const express = require('express');

const bodyParser = require('body-parser');

const routes = require('./src/server/router');

const app = express();

const port = process.env.APP_PORT;

app.use(bodyParser.json());
app.use(routes);

const boot = async () => {
  app.listen(port, () => console.log(`App is listening on ${port}!`));
};

boot();
