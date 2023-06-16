exports.paginaInicial = (req ,res)=>{
   res.render('index');
   return; 
}

exports.postTest = (req,res)=>{
    res.send(req.body);
    return;
}