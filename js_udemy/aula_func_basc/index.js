//Maneira classica de criação de fuções
function soma(x,y){
    return(x+y);
}
const teste = soma(2,5);

// Maneira discreta 
console.log(teste);
const teste2 = function(n){
    return n ** 0.5;
};

console.log(teste2(9));


//Maneira sem function usando =>
const teste3 = (n)=> {
    return n ** 2;
}
console.log(teste3(2));

// outra alternativa quando se tem somente um parametro 

const test4 = n => n ** 3;
console.log(test4(2));

