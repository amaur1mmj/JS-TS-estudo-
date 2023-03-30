function criaMultplicador(multplicador){
    return function(n){
        return n* multplicador;
    };
}

const duplica = criaMultplicador(2)
const triplica = criaMultplicador(3)
const quatriplica = criaMultplicador(4);


