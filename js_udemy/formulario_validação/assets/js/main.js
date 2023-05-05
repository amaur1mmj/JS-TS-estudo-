class ValidaFormulario{
    constructor(){
        this.formulario = document.querySelector('.form-base');
        this.eventos();
    }

    eventos(){
        this.formulario.addEventListener('submit', e =>{
            this.handleSubmit(e);
        });
    }

    handleSubmit(e){
        e.preventDefault();
        const camposValidos = this.camposSapValidos();
        const senhasValidas = this.senhasValidas();

        if (camposValidos && senhasValidas){
            alert('Formulário enviado.');
            this.formulario.submit();
        }
    }

    senhasValidas(){
        let valid = true;

        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.repetir-senha');

        if(senha.value !== repetirSenha.value){
            this.criaErro(senha, "Campo senha e Confirma senha precisam ser iguais.");
            this.criaErro(repetirSenha, "Campo senha e Confirma senha precisam ser iguais.");
            valid = false;
        }
        if(senha.value.length < 6 || senha.value.length > 12){
            this.criaErro(senha, "Campo senha deve ter entre 6 e 12 caracteres");
            valid = false;
        }
        return valid;
    }

    camposSapValidos(){
        let valid = true;

        for(let erroText of this.formulario.querySelectorAll('.error-text')){
            erroText.remove();
        } 

        for(let campo of this.formulario.querySelectorAll('.valida')){
            const label = campo.previousElementSibling.innerText;

            if(!campo.value){
                this.criaErro(campo, `Campo "${label}" não pode está vazio`);
                valid = false;
            }

            if(campo.classList.contains('cpf')){
                if(!this.validaCPF(campo)) valid = false;
            }
            
            if(campo.classList.contains('usuario')){
                if(!this.validaUsuario(campo)) valid = false;
            }
        }
        return valid
    }

    validaUsuario(campo){
        const usuario = campo.value;
        let valid = true;

        if(usuario.length < 3 || usuario.length > 12) {
            this.criaErro(campo, 'Usuário deve ter entre 3 e 12 caracteres');
            valid = false;
        }
        if(!usuario.match(/^[a-zA-Z0-9]+$/g)){
            this.criaErro(campo, 'Nome do usuário precisa conter apenas letras e numeros');
            valid = false;
        }
        
        return valid;
    }

    validaCPF(campo){
        const cpf = new ValidaCPF(campo.value);
        
        if(!cpf.valida()){
            this.criaErro(campo, 'CPF inválido');
            return false;
        }
        return true;

    }

    criaErro(campo, msg){
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    }
}

const valida = new ValidaFormulario();