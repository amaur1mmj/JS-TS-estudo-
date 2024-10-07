const Login = require('../models/LoginModel');
const Contato =  require('../models/ContatoModel');

exports.index = async (req, res)=>{
    const contatos = await Contato.buscaContato();
    if(req.session.user) return res.render('login-logado',{contatos});
    return res.render('login');
};

exports.register = async function(req,res){

    try{
        const login = new Login(req.body);
        await login.register();
        console.log(login.errors.length); 
       
       if(login.errors.length > 0){  
            req.flash('errors', login.errors);
            req.session.save(function(){
               return res.redirect('index');
           });
           return;
       }

       req.flash('success', 'Usuário criado com sucesso.');
       req.session.save(function(){
          return res.redirect('index');
      });
    }catch(e){
        console.log(e);
        return res.render('404');
        
    }
    
};

 exports.login = async (req,res)=>{

    try{
        const login = new Login(req.body);
        await login.login();
        console.log(login.errors.length); 
       
       if(login.errors.length > 0){  
            req.flash('errors', login.errors);
            req.session.save(function(){
               return res.redirect('index');
           });
           return;
       }

       req.flash('success', 'Você entrou no Sistema.');
       req.session.user = login.user;
       req.session.save(function(){
          return res.redirect('index');
      });
    }catch(e){
        console.log(e);
        return res.render('404');
        
    }
    
 };

 exports.logout = async (req,res)=> {
        req.session.destroy();
        res.redirect('/login/index');
 }