//! função splice --

//* nomes.slpice(índice, delete, elem1, elem2, elem2)
//* Essa função tem  poder de das três funções básicas de arrays (delete,pop,push,shift)
const nomes  = ['jaum', 'pedru', 'carlim','ferdandu','cara'];
console.log(nomes);

//!pop
//const removidos = nomes.splice(-1,1);

//!shift
//const removidos = nomes.splice(0,1);

//!push 
//const removidos = nomes.splice(nomes.length,0,'olahsó', 'podeteroutrotbm');

//!unshift
const removidos = nomes.splice(0,0,'nocomeco');

//const removidos = nomes.splice(3,1,'BATARA'); //dessa forma pode haverá a substituição do elemento e adicionado o novo.
//console.log(removidos , nomes);

const a1 = [1,2,3];
const b2 = [4,5,6];

const c3  = a1.concat(b2)
const c4 = [...a1,...b2, 'outrovalor' , ...[20,40,60]]

console.log(c4)