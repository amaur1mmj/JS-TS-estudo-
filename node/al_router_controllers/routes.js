const express = require('express');
const route  = express.Router();
const homeController = require('./controllers/homeController');
const testController = require('./controllers/testController');
const contatoController = require ('./controllers/contatoController');

//rotas home 
route.get('/',homeController.paginaInicial); 
route.post('/',homeController.postTest);

//rota test
route.get('/test/:idUsuario?/:parametro?',testController.testParamsQuery);

//rota contato
route.get('/contato', contatoController.contato); 

module.exports = route;