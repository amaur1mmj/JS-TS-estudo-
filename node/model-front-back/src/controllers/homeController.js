exports.paginaInicial = (req ,res)=>{
   res.render('index');

}

exports.postTest = (req,res)=>{
    console.log(req.body);
    res.send(`Nome: <strong>${req.body.nome}</strong> e esta fazendo: <strong>${req.body.fazendo}<strong> <h2> Agora sobre nova direção</h2>`);
}