const Contato = require('../models/ContatoModel');

exports.index = (req, res)=>{

    res.render('contato', {
        contato: {}
    });
}

exports.register = async (req, res)=>{

    try{

        const contato =  new Contato(req.body);
        await contato.register();
    
        if(contato.errors.length > 0){  
            req.flash('errors', contato.errors);
            req.session.save(function(){
               return res.redirect('index');
           });
           return;
        }
    
        req.flash('success', 'Contato registrado.');
        console.log("Body: ",contato.body)
        console.log("Contato: ",contato.contato)
        req.session.save(()=> res.redirect(`/contato/index/${contato.contato._id}`));
        return;

    }catch(e){
        console.log(e);
        return res.render(`404`);  
    }

}

exports.editIndex = async (req,res)=>{
    if(!req.params.id) return res.render('404');
    const contato = await Contato.buscaPorId(req.params.id);
    if(!contato) return res.render(`404`);

    
    res.render(`contato`, {contato});

}

exports.edit = async (req, res)=>{
    if(!req.params.id) return res.render('404');

    try{

    const contato  = new Contato(req.body);
    await contato.edit(req.params.id);
    
    if(contato.errors.length > 0){  
        req.flash('errors', contato.errors);
        req.session.save(function(){
           return res.redirect(`/contato/index/${req.params.id}`);
       });
       return;
    }

    req.flash('success', 'Contato Editato com sucesso.');
    req.session.save(()=> res.redirect(`/contato/index/${contato.contato._id}`));
    return;

    }catch(e){
        console.log(e);
        return res.render(`404`);
    }
    
}

exports.delete = async (req,res)=>{
    if(!req.params.id) return res.render('404');
    try{
        const contato = await Contato.delete(req.params.id);
        if(!contato) return res.render('404');
        
        req.flash('success', 'Contato Deletado com Sucesso.');
        req.session.save(()=> res.redirect(`/login/index/`));
        return;

    }catch(e){
        console.log(e);
        return res.render(`404`);
    }

}
