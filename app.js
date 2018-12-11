const express = require('express');
const app = express();
const mainRoutes = require('./routes/index.js');

app.use('/', mainRoutes);

var port = process.env.port || 8010;

app.listen(port, () => {
  console.log('App listening on '+ port)
})
