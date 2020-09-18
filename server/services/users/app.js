require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express()
const PORT = process.env.PORT || 3000;
const routes = require('./routes');

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true}));
app.use(routes)

module.exports = app