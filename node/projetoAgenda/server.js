require('dotenv').config(); //* variaveis de ambiente
const express = require('express');
const app = express();
//* conexão com a base de dados usando variaveis do dotenv
const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    app.emit('pronto');
})
.catch(e =>{console.log(e)});

//* seção 
const session = require('express-session');
//* validando a seção e criando uma tabela para manter a mesma 
const MongoStore = require('connect-mongo');
//* mensagens que expiram uma vez usadas 
const flash = require('connect-flash');


const routes = require('./routes');
const path = require('path');
const helmet  = require('helmet');
const csrf = require('csurf'); //* proteção contra envio de formularios
//* intervenções nas rotas, permitindo o manuseio das informações e direções tomadas
const {middlewareGlobal, checkCsrfError, csrfMiddleware} = require('./src/middleware/middleware')

app.use(helmet());
app.use(express.urlencoded({ extended:true }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public')));

//* objeto da seção 
const sessionOptions = session({
    secret: 'sdhaluisdiansdinnaodnsaindçisaniodsnaç',
    store: MongoStore.create({mongoUrl: process.env.CONNECTION , useUnifiedTopology: true }),
    resave: false,
    saveUninitialized: false,
    cookie:{
        maxAge: 1000* 60* 60* 24* 7,
        httpOnly: true
    }

});

app.use(sessionOptions);
app.use(flash());


app.set('views', path.resolve(__dirname, 'src','views'));
app.set('view engine', 'ejs');

app.use(csrf());
//* middlewaew global de exemplo, ele vai inercepitar todas os eventos global.
app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(routes);


app.listen(3000, () =>{
    console.log('Acessar: http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});