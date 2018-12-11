const express = require('express');
const app = express();
const mainRoutes = require('./routes/index.js');

app.use('/', mainRoutes);

var port = 8010;

app.listen(process.env.PORT || port, '0.0.0.0', () => {
  console.log('Diva listening on '+ port)
})
