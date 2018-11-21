const rotas = require('express').Router();

rotas.get('/singlepull', (req, res) => {
  res.status(200).json({message : 'Connected!'});
});

rotas.get('/tenplusone', (req, res) => {
  res.status(200).json({message : 'Divando'});
});

module.exports = rotas;
