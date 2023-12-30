const express = require('express')
const app = express()

app.use(express.static('public'));
app.use(express.json());
app.use(express.Router())

module.exports = app