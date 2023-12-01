const validator = require('validator');
//const format = require('pg-format');
const bcryptjs = require('bcryptjs');
const pool = require('../../db');

//*exemplo de um esquema de tabela
const createUsersSchema =`
    INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *;
`;

const userExist = 
    `SELECT EXISTS (SELECT 1 FROM users WHERE email = $1) AS user_exists;
    `;

class User{
    constructor(body){
        this.body = body;
        this.errors = [];
        this.user = null;
    }   
    

    async register(){
        this.validate();
        console.log(this.errors,'aki 1');
        if(this.errors.length > 0) return;

        await this.userExists();
        console.log(this.errors, 'aki 2');
        if(this.errors.length > 0 ) return;

        const salt = bcryptjs.genSaltSync();
        this.body.password = bcryptjs.hashSync(this.body.password, salt);
        
        this.user = await pool.query(createUsersSchema,[this.body.email, this.body.password])


    }

    async userExists(){
        try{
            const result = await  pool.query(userExist,[this.body.email]);
            console.log(result.rows[0].user_exists);

            if(result.rows[0].user_exists) this.errors.push('Usuário já existe.');
        
        }catch(e){
            console.log(e);
        }
    }

    validate(){
        this.cleanUp();
        console.log( this.body.email);
        if(!validator.isEmail(this.body.email)) this.errors.push('E-mail inválido.');
        if(this.body.password.length < 3 || this.body.password.length > 50 )
            this.errors.push('A senha tem que ter entre 3 e 50 caracteres.');

            
    }

    cleanUp(){
        for(const key in this.body){
            if(typeof this.body[key] !== 'string') 
                this.body[key] = '';
        }

        this.body = {
            email: this.body.email,
            password: this.body.password
        };

    }


}

module.exports = User;