(function(idade, altura){
console.log('TUdo que rodar nesse escopo é separado e executado de maneira imediata ao escopo global.')


function nome(nome = 'pedu'){
    return nome +' '+ 'Batata';
}

console.log(idade, altura)


})(99,1.10);

const nome  = 'AAAAAAAAAAAAAAAH';
console.log(nome);