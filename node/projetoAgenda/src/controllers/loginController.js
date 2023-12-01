//const Login = require('../models/LoginModel');
const User = require('../models/LoginModelnew');

exports.index = (req, res)=>{
    res.render('login');
};

exports.register = async function(req,res){
    console.log(req.body,"???????");
    try{
        const login = new User(req.body);
        await login.register();
        //console.log(login.errors.length); 
       
       if(login.errors.length > 0){  
            req.flash('errors', login.errors);
            req.session.save(function(){
               return res.redirect('/login/index');
           });
           return;
       }

       req.flash('success', 'Usuário criado com sucesso.');
       req.session.save(function(){
          return res.redirect('/login/index');
      });
    }catch(e){
        console.log(e);
        return res.render('404');
        
    }
    
};

// exports.login = (req,res)=>{
//     res.send('OLA');
    
// };