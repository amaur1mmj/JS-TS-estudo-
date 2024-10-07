import validator from 'validator';

export default class CadastroContato {
    constructor(formClass){
        this.form = document.querySelector(formClass);
    }

    initEvents(){
        if(!this.form) return;
        this.form.addEventListener('submit', e =>{
            this.validation(e);

        });
    }

    validation(e){
        e.preventDefault();
        const camposValidos = this.camposValidos();
        
        if(camposValidos) {
            console.log('cade us guri aqui?')
            this.form.submit()};
    }

    camposValidos(){

        let valid = true;
        const inputNome = this.form.querySelector('input[name="nome"]');
        const inputEmail = this.form.querySelector('input[name="email"]');
        const inputTel = this.form.querySelector('input[name="telefone"]');
        
        for(let erroText of this.form.querySelectorAll('.error-text')){
            erroText.remove();
        }

        if(!inputNome.value){
                this.criarError(inputNome, `Campo Nome não pode está vazio.`);
                valid = false;
        }
        const telEml =  this.camposEmTel(inputEmail, inputTel);
        return valid && telEml ?  true : false;
        }
        

    camposEmTel(email, tel){
        let campo = [];
        let msg = [];

        if(!validator.isEmail(email.value) && email.value){
            this.criarError(email,'Email inválido'); 
            return false; 
        }

        if(!email.value) {
            campo.push(email);
            msg.push('Campo Email so pode ser vázio caso Telefone estaja preenchido.');
        }

        if(!tel.value){
            campo.push(tel);
            msg.push('Campo Telefone so pode ser vázio caso Email estaja preenchido.');
        }
       

        if(!campo.length || campo.length === 1){
            return true;
        }else{
            for(let i=0; i< campo.length; i++) this.criarError(campo[i],msg[i]);         
        return false;      
        }
        }

    criarError(campo,msg){
        const div = document.createElement(`div`);
        div.innerHTML = msg;
        div.classList.add(`error-text`,'text-danger', 'small');
        campo.insertAdjacentElement('afterend', div);

    }
}