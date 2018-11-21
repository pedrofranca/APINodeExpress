const rotas = require('express').Router();

rotas.get('/singlepull', (req, res) => {
  res.status(200).json({message : '3% for Rainbows, 10% for Golden, 87% for blues'});
});

rotas.get('/tenplusone', (req, res) => {
  res.status(200).json({message : '5% for Rainbows, 10% for Golden, 85% for blues'});
});

module.exports = rotas;
