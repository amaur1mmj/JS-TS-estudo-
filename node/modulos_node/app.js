//* exportando de maneira única ou obejtiva
// const mod1 = require('./mod1');
// const falaNome = mod1.falaNome;
//* usando desestruturação 
//! const {nome, sobrenome, falaNome} = require('./mod1');
// console.log('kkkkkkkkkkkkk '+nome, sobrenome);

// console.log(falaNome());
//* modulos nativos ou baixados não precisam de caminho
const axios = require('axios');
const path = require('path');
const {Pessoa} = require('./mod1');

const p1 = new Pessoa('Carlim');
console.log(p1);

console.log(__dirname);
console.log(__filename);

console.log(path.resolve(__dirname));
console.log(path.resolve(__filename));







