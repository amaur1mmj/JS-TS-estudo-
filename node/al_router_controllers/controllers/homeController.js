exports.paginaInicial = (req ,res)=>{
   res.send(`
    <form action ="/" method="POST" >
    Nome: <input type = "text" name = "nome"><br>
    Fazendo: <input type = "text" name = "fazendo">
    <button>Enviar!!!!!!!</button>
    </form>
    ` );

}

exports.postTest = (req,res)=>{
    console.log(req.body);
    res.send(`Nome: <strong>${req.body.nome}</strong> e esta fazendo: <strong>${req.body.fazendo}<strong> <h2> Agora sobre nova direção</h2>`);
}