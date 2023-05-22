const express = require('express');
const route  = express.Router();
const homeController = require('./src/controllers/homeController');
const testController = require('./src/controllers/testController');
const contatoController = require ('./src/controllers/contatoController');

//rotas home 
route.get('/',homeController.paginaInicial); 
route.post('/',homeController.postTest);

//rota test
route.get('/test/:idUsuario?/:parametro?',testController.testParamsQuery);

//rota contato
route.get('/contato', contatoController.contato); 

module.exports = route;