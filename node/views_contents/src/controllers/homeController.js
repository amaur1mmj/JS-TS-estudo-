
exports.paginaInicial = (req ,res)=>{
    res.render('index',{
        titulo: 'Este é o titulo',
        numeros: [1,23,545,565,7657,6] 
    });

}

exports.postTest = (req,res)=>{
    console.log(req.body);
    res.send(`Nome: <strong>${req.body.nome}</strong> e esta fazendo: <strong>${req.body.fazendo}<strong> <h2> Agora sobre nova direção</h2>`);
}