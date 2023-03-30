// function fcOi(){
//     let total = 0;
//     for (let argument of arguments){
//         total += argument
//     }

//     console.log('OLAAAAAA')
//     console.log(total)
// }

// fcOi(1, 3,3,4,99)

//* Usano rest nos parametros!

function conta(operador, acumulador, ...numeros){
    for(let numero of numeros){
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '*') acumulador *= numero;
        if(operador === '/') acumulador /= numero;

    }
    console.log(acumulador);
}

conta('+', 0, 20,30,40,50,60)
