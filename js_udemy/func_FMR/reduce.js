const pessoas = [
    {nome: 'carlim', idade:22},
    {nome: 'pedri', idade:20},
    {nome: 'juca', idade:23},
    {nome: 'flavim', idade:55},
    {nome: 'kevin', idade:23},
    {nome: 'jaum carlinhos', idade:76},
    {nome: 'roberto', idade:11},

 ];

 const maisVelha = pessoas.reduce((acumulador,valor) =>{
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
 })

 console.log(maisVelha)