require('dotenv').config();

const express = require("express");
const morgan = require("morgan");
const path = require('path');

require('./database');

const routes = require("./routes");

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp', 'uploads')));

app.use(routes);

app.listen(3000);