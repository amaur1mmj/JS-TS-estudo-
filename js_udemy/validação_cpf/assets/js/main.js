/* 
let cpf = '705.484.450-52';
let cpfLimpo = cpf.replace(/\D+/g, '');
console.log(cpfLimpo);
*/

const form  = document.querySelector('.form');

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const inputCpf = e.target.querySelector('#input-cpf');
    const cpfLimpo = clearCpf(inputCpf.value);
    const validacao = ValidationCpf(cpfLimpo);
    console.log(validacao);


});

function clearCpf(inputCpf){
    let cpfLimpo = inputCpf.replace(/\D+/g, '');
    if(checkInputCpf(cpfLimpo)) return cpfLimpo;

}

function checkInputCpf(input){
    if(input.length === 11) return true;
    if(input.length >14) throw 'Entrada inválida';
    return;
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
    let acumulador =  cpfArray.reduce((ac,val)=>{    
        ac += val* cont;
        cont--;
        return ac; 
    },0);

    return acumulador;

}
function calcDigitoCpf(ac){ 
    
    const digit = 11- (ac % 11 );
    return digit < 9 ? digit : 0; 
};



function ValidationCpf(cpf){

    let  cpfArray = arrayCpf(cpf);
    console.log(cpfArray);

    let ac = accumulatorCalcCpf(cpfArray.cpfArraySemDgt);
    let digito = calcDigitoCpf(ac);
    
    const cpfParcial = [...cpfArray.cpfArraySemDgt,String(digito)];
    
    ac = accumulatorCalcCpf(cpfParcial);
    digito = calcDigitoCpf(ac);
    
    const cpfFinal = [...cpfParcial,String(digito)];
    
    if(cpfFinal.join("") === cpfArray.cpfArrayCompleto.join("")) return cpfFinal.join("");
    console.log(cpfFinal);
    console.log(cpfArray.cpfArrayCompleto);
    return;
}