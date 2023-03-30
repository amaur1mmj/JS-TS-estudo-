//!Calculadora usando Função Fábrica
 function criaCalculadora(){
    //*essa área entre o escopo e o objeto pode ser usado como local para ações e variáveis privadas
    
    return{
        display: document.querySelector('.display'),

        inicia(){
            this.clickCalc();
            this.enterCalc();

        },
        realizaConta(){
            let conta = this.display.value;
            try{
              
                conta  = eval(conta);

                if(!conta){
                    this.clearDisplay;
                    alert('Conta inválida!')
                    return;
                }
                this.display.value = conta;
            }catch{
                this.clearDisplay();
                alert('Error!');
                return;
            }

        },

        clearDisplay(){
            this.display.value = '';
        },
        apagarNum(){
            this.display.value = this.display.value.slice(0,-1);
        },

        //? para que uma função seja chamada em outra dentro do objeto, deve ser usado o this!
        btnNumber(valor){
            return this.display.value +=valor ;
        },

        clickCalc(){
         
            document.addEventListener('click',(e)=>{
                const el = e.target
                if(el.classList.contains('btn-num'))this.btnNumber(el.innerText);
                if(el.classList.contains('btn-clr')) this.clearDisplay();
                if(el.classList.contains('btn-del')) this.apagarNum();
                if(el.classList.contains('btn-eql')) this.realizaConta();
            });
        },
        enterCalc(){
            document.addEventListener('keyup',e =>{
                const el = e.target
                if(el.KeyCode === 13) this.realizaConta();
            })

        },

    };
}

const calculadora = criaCalculadora();
calculadora.inicia();