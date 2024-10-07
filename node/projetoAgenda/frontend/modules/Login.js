import validaor from 'validator';

export default class Login{
    constructor(formClass){
        this.form =  document.querySelector(formClass);

    }

    init(){
        this.events();

    }

    events(){
        if(!this.form) return;
        this.form.addEventListener('submit', e =>{
            e.preventDefault();
            this.validation(e);
        })

    }

    validation(e){
        const el = e.target;
        const emailInput = el.querySelector('input[name="email"]');
        const passwordlInput = el.querySelector('input[name="password"]');
        let error = false; 

        if(!validaor.isEmail(emailInput.value)){
            this.criarError( emailInput,`Email inválido!`);
            error = true;
        }

        if(passwordlInput.value.length < 3 || passwordlInput.value.length > 50 ){
            this.criarError(passwordlInput,'Senha deve ter entre 3 e 50 caracteres!');
            error = true;
        }

        if(!error) el.submit();
    }

    criarError(campo,msg){
        const div = document.createElement(`div`);
        div.innerHTML = msg;
        div.classList.add(`error-text`,'text-danger', 'small');
        campo.insertAdjacentElement('afterend', div);

    }

} 