const express = require('express');
const route  = express.Router();
const homeController = require('./src/controllers/homeController');


//rotas home 
route.get('/',homeController.paginaInicial); 
route.post('/',homeController.postTest);


module.exports = route;