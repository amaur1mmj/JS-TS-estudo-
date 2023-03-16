const numeroEntrada = Number(prompt('Digite um Número! '));

const numeroInicial = document.getElementById('numero-inicial');
const texto1 = document.getElementById('campo-1');
const texto2 = document.getElementById('campo-2');
const texto3 = document.getElementById('campo-3');
const texto4 = document.getElementById('campo-4');
const texto5 = document.getElementById('campo-5');
const texto6 = document.getElementById('campo-6');
numeroInicial.innerHTML = numeroEntrada;

console.log(typeof numeroEntrada);
console.log(typeof numeroInicial);

texto1.innerHTML = `<p>Seu número + 2 é : ${numeroEntrada + 2} .</p>`;
texto2.innerHTML = `<p>A raiz quadrada do número escolhido é: ${numeroEntrada ** (1/2)}</p>`;
texto3.innerHTML = `<p>É NaN?: ${isNaN(numeroEntrada)} </p>`;
texto4.innerHTML = `<p>Arredondado para baixo: ${ Math.ceil(numeroEntrada)}</p>`;
texto5.innerHTML = `<p>Arredondado para cima: ${Math.floor(numeroEntrada)} </p>`;
texto6.innerHTML = `<p>Com duas casas decimais : ${numeroEntrada.toFixed(2)}`;



