//!Calculadora usando Função Construtora

 function Calculadora(){

    this.display = document.querySelector('.display');
    
    this.inicia = ()=> {
        this.capturaCliques();
        this.capturaEnter();
    };

    this.capturaEnter = ()=>{
        this.display.addEventListener('keyup', e => {
            if(e.keyCode === 13) this.realizaConta();
        });
    };

    this.capturaCliques = ()=>{
        document.addEventListener('click', e => {
            const el = e.target;
            if(el.classList.contains('btn-num')) this.addNumdisplay(el);
            if(el.classList.contains('btn-clr')) this.clear();
            if(el.classList.contains('btn-del')) this.del();
            if(el.classList.contains('btn-eql')) this.realizaConta();

        });

    this.realizaConta = ()=>{
        try{
            let conta = eval(this.display.value);

            if(!conta){
                alert('Conta inválida!');
                return;
            }
        this.display.value = conta;

        }catch{
            alert('Erro!')
            return;
        }
    }

    this.addNumdisplay = (el)=>{
        this.display.value += el.innerText;
        this.display.focus();

    }

    this.clear = ()=> this.display.value = '';
    this.del = () => this.display.value = this.display.value.slice(0,-1);

    };

 }

 const calculadora = new Calculadora();
 calculadora.inicia();
 