const express = require('express');
const app = express();

app.use(express.urlencoded({
    extended:true
}));

app.get('/' , (req ,res)=>{
    res.send(`
    <form action ="/" method="POST" >
    Nome: <input type = "text" name = "nome"><br>
    Fazendo: <input type = "text" name = "fazendo">
    <button>Enviar!!!!!!!</button>
    </form>
    ` );
});

app.post('/', (req, res)=>{
    console.log(req.body);
    res.send(`Nome: <strong>${req.body.nome}</strong> e esta fazendo: <strong>${req.body.fazendo}<strong>`);
})

app.get('/test/:idUsuario?/:parametro?', (req,res)=>{
    console.log(req.params);
    console.log(req.query);
    res.send(req.query);

});


app.get('/contato',(req, res) =>{
    res.send('Olha só que bacana!');
})

app.listen(3000, () =>{
    console.log('Acessar: http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});