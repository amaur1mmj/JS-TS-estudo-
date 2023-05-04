const pessoas = [
    {id:3 , nome: 'carlim'},
    {id:2 , nome: 'jaum'},
    {id:1 , nome: 'perdon'},
];

// const novasPessoas = {};

// for (const pessoa of pessoas){
//     const {id} = pessoa;
//     console.log(typeof(id));
//     novasPessoas[id] = {...pessoa};
// }

const novasPessoas = new Map();

for (const pessoa of pessoas){
    const {id} = pessoa;
    novasPessoas.set(id,{...pessoa});
}
console.log(novasPessoas);

for (const pessoa of novasPessoas.values()){
    console.log(pessoa);
}


