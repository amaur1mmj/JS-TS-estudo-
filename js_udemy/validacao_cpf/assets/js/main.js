/* 
let cpf = '705.484.450-52';
let cpfLimpo = cpf.replace(/\D+/g, '');
console.log(cpfLimpo);
*/

const container  = document.querySelector('.container');
const form = document.querySelector('.form-cpf');
let cont = 0;

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const inputCpf = e.target.querySelector('#input-cpf');
    if(!clearCpf(inputCpf.value)) return;
    const cpfLimpo = clearCpf(inputCpf.value);
    ValidationCpf(cpfLimpo);

});


function creatImg(src, nameId){
    const tag = document.createElement("img");
    tag.setAttribute('src',src);
    tag.setAttribute('class',nameId);
    tag.setAttribute('alt','imgs');
    
    return tag;
};

function validacaoEfeito(valido = false){
    const imgValido = creatImg('assets/img/valido.png', 'img-validacao');
    const imgNaoValido = creatImg('assets/img/nao_valido.png','img-validacao');
    const imgAlert = creatImg('assets/img/alerta.png','img-validacao');
    
    if(valido === 'v') {
        cont++;
        console.log(cont)
        return container.appendChild(imgValido)

    } else if(valido=== 'a'){
        cont++;
        console.log(cont)
        return container.appendChild(imgAlert);
    };
    cont++;
    console.log(cont)
    return container.appendChild(imgNaoValido);
    
};

function clearImage(){
    if(cont < 1) return;
    const imgRemove = document.querySelector(`.container .img-validacao`)
    container.removeChild(imgRemove);
    cont--; 
}


function clearCpf(inputCpf){
    let cpfLimpo = inputCpf.replace(/\D+/g, '');
    if(checkInputCpf(cpfLimpo))  return cpfLimpo;
    clearImage();
    validacaoEfeito('a');
    return false

}

function checkInputCpf(input){
    if(input.length === 11) return true;
    return false;
}


function arrayCpf(cpfLimpo){ 
    cpfArrayCompleto = Array.from(cpfLimpo);
    cpfArraySemDgt = cpfArrayCompleto.slice(0,cpfArrayCompleto.length-2);
    return {
        cpfArrayCompleto: cpfArrayCompleto,
        cpfArraySemDgt:cpfArraySemDgt
    };
}

function accumulatorCalcCpf(cpfArray){

    let cont = cpfArray.length+1; 
    console.log(`aquiiii! ${typeof(cont)}`);
    let acumulador =  cpfArray.reduce((ac,val)=>{    
        console.log(`${typeof(val)} valorkkkkkkkkkk`);
        ac += val* cont;
        cont--;
        console.log(`${typeof(ac)} kkkkkkkkkk`);
        return ac; 
    },0);

    return acumulador;

}
function calcDigitoCpf(ac){ 
    
    const digit = 11- (ac % 11 );
    return digit <= 9 ? digit : 0; 
};

function isSequencia(cpf){
    const verifica = cpf[0].repeat(cpf.length);
    console.log(verifica);
    console.log(cpf);
    return verifica === cpf.join("");
}


function ValidationCpf(cpf){

    let  cpfArray = arrayCpf(cpf);
    
    let ac = accumulatorCalcCpf(cpfArray.cpfArraySemDgt);
    let digito = calcDigitoCpf(ac);


    const cpfParcial = [...cpfArray.cpfArraySemDgt,String(digito)];

    ac = accumulatorCalcCpf(cpfParcial);
    digito = calcDigitoCpf(ac);
    
    const cpfFinal = [...cpfParcial,String(digito)];
    
    if(isSequencia(cpfFinal)){ 
        clearImage();
        validacaoEfeito();
        return;
    }
    
    
    if(cpfFinal.join("") === cpfArray.cpfArrayCompleto.join("")) {
        clearImage();
        validacaoEfeito('v');        
        return cpfFinal.join("");
    };

    clearImage();
    validacaoEfeito();
    console.log(cpfFinal);
    console.log(cpfArray.cpfArrayCompleto);
    return;
}


