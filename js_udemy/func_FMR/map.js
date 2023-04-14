 const pessoas = [
    {nome: 'carlim', idade:22},
    {nome: 'pedri', idade:20},
    {nome: 'juca', idade:23},
    {nome: 'flavim', idade:55},
    {nome: 'kevin', idade:23},
    {nome: 'jaum carlinhos', idade:76},
    {nome: 'roberto', idade:11},

 ]

 const novasPessoas = pessoas.map(valor => `${valor.nome}`)
 console.log(novasPessoas);

 const p2 = pessoas.map(obj=> ({idade: obj.idade})) // ou usar delete obj.nome
 console.log(p2)

 const comIds = pessoas.map(function(obj, indice){
    const newObj  = {...obj};
    newObj.id = indice;
    return newObj
 });

 console.log(comIds)