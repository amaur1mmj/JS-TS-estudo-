const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const inputPeso = e.target.querySelector('#input-peso');
    const inputAltura = e.target.querySelector('#input-altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        return setResultado('Peso inválido', false);
    }
    if (!altura) {
        return setResultado('Altura inválida', false);
    }
    
    const imc = getIMC(peso, altura);
    const nivelIMC = yourIMC(imc);

    const msg = `Seu IMC é ${imc} (${nivelIMC})`;

    setResultado(msg, true);

});

function getIMC(peso, altura) {
    const imc = peso / (altura ** 2);
    return imc.toFixed(2);
}

function yourIMC(imc) {
    const nivel = ['Obesidade grau 3!', 'Obesidade grau 2!', 'Obesidade grau 1!', 'Sobrepeso!', 'Peso normal!', 'Abaixo do peso!']

    if (imc >= 39.9) return nivel[0];
    if (imc >= 34.9) return nivel[1];
    if (imc >= 29.9) return nivel[2];
    if (imc >= 24.9) return nivel[3];
    if (imc >= 18.5) return nivel[4];
    if (imc < 18.5) return nivel[5];

}



function getP() {
    const p = document.createElement('p');
    return p;

}

function setResultado(msg, isValid) {
    const result = document.querySelector('#result');
    result.innerHTML = ''

    const p = getP();

    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }
    p.innerHTML = msg;  
    result.appendChild(p);

}