const express = require('express');
const app = express();
const rollsRoutes = require('./rolls.js');
const oddsRoutes = require('./odds.js');

app.use('/rolls', rollsRoutes);
app.use('/odds', oddsRoutes);

module.exports = app;
