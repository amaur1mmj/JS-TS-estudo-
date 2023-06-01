import concatSenha from './modules/concatSenha';
import './assets/css/style.css';



const form = document.querySelector('.menu-senha');

const checkUpper = form.querySelector('#upper');
const checkLower = form.querySelector('#lower');
const checkNum = form.querySelector('#num');
const checkSimbol = form.querySelector('#simbol');

const quant = form.querySelector('#input-quant');

if(quant.value > 50)

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let op='';
        if(checkUpper.checked)
            op  = op +'u';
        if(checkLower.checked)
            op  = op +'l';
        if(checkNum.checked)
            op  = op +'n';
        if(checkSimbol.checked)
            op  = op +'s';
    console.log(op);

    const senha = concatSenha(quant.value,op)

    const div =  document.querySelector('.senha-gerada');

    div.innerText =senha;   


});

 




