const express = require('express');
const app = express();


app.get('/' , (req ,res)=>{
    res.send(`
    <form action ="/" method="POST" >
    Nome: <input type = "text" name = "nome">
    <button>Enviar!!!!!!!</button>
    </form>
    ` );
});

app.post('/', (req, res)=>{
    res.send('Formulario en<b>viado<b>');
})

app.get('/contato',(req, res) =>{
    res.send('Olha só que bacana!');
})

app.listen(3000, () =>{
    console.log('Acessar: http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});