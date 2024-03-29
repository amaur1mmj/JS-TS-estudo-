//* ambiente env, que é usado para conter informações que não vão subir ao repositório
require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

//*conecção do banco de dados usando MongoDB
mongoose.connect(process.env.CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log('Conectei a base de dados!');
    app.emit('pronto');
})
.catch(e =>{console.log(e)});


const routes = require('./routes');
const path = require('path');

app.use(express.urlencoded({ extended:true }));

app.use(express.static(path.resolve(__dirname, 'public')));


app.set('views', path.resolve(__dirname, 'src','views'));
app.set('view engine', 'ejs');
app.use(routes);


app.listen(3000, () =>{
    console.log('Acessar: http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});