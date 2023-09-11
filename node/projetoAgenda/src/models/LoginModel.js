const validator = require('validator');
const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');

//*exemplo de um esquema de tabela
const LoginSchema = new mongoose.Schema({
    email: {type: String ,  require: true },
    password: {type: String ,  require: true }
});

const LoginModel = mongoose.model('Login', LoginSchema);

class Login {
    constructor(body){
        this.body = body;
        this.errors = [];
        this.user = null;
    }

   async register(){
        this.valida();
        if(this.errors.length > 0) return;
    
       await this.userExists();

        if(this.errors.length > 0) return;

        const salt = bcryptjs.genSaltSync();
        this.body.password = bcryptjs.hashSync(this.body.password, salt);
       
       

        this.user = await LoginModel.create(this.body)
        
    }

    async userExists(){
        try{
            const user = await LoginModel.findOne({email: this.body.email });
            if(user) this.errors.push('Usuário já existe.');
        }catch(e){
            console.log(e)    
        }
    }

    valida(){
        this.cleanUp();

        if(!validator.isEmail(this.body.email)) this.errors.push('E-mail inválido');

        if(this.body.password.length < 3 || this.body.password.length > 50)
            this.errors.push('A senha precisar ter entre 3 e 50 caracteres');
        

    }

    cleanUp(){

        for(const key in this.body){
            if(typeof this.body[key] !== 'string'){
                this.body[key] = '';
            }
        }    

        this.body = {
            email: this.body.email,
            password: this.body.password
        };
    }

}

module.exports = Login;