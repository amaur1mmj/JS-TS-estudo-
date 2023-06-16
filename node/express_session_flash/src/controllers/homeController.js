
exports.paginaInicial = (req ,res)=>{
    //req.session.usuario = {nome: 'Amauri', logado: true};
    
    if(req.session.usuario) console.log(req.session.usuario)
    else{console.log('KKKKKKKKKK')};
   
    res.render('index');

}

exports.postTest = (req,res)=>{
    console.log(req.body);
    res.send(`Nome: <strong>${req.body.nome}</strong> e esta fazendo: <strong>${req.body.fazendo}<strong> <h2> Agora sobre nova direção</h2>`);
}