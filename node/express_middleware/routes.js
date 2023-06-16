const express = require('express');
const route  = express.Router();
const homeController = require('./src/controllers/homeController');

//* exemplo de middlware, onde o mesmo pode capitar eventos durante a transição de resquisição e resposta
// function meuMiddleware(req,res,next){
//     console.log();
//     console.log('Passei no middleware');
//     console.log();
//     next();
// }

//rotas home 
route.get('/',homeController.paginaInicial); 
route.post('/',homeController.postTest);


module.exports = route;