const path = require('path');
const caminhoArquivo = path.resolve(__dirname,'test.json');
const escrever = require('./modules/escr_lendo_arquivos');
const ler = require('./modules/ler')

// const pessoas = [
//     {nome: 'Jaum'},
//     {nome: 'Jacó'},
//     {nome: 'Fernandu'},
//     {nome: 'Maria'},

// ];

// const json = JSON.stringify(pessoas, '',2);
// escrever(caminhoArquivo, json);
console.log(caminhoArquivo);

async function lerArquivo(caminho){
    const dados = await ler(caminho);
     renderizaDados(dados);
}

function renderizaDados(dados){
    dados = JSON.parse(dados);
    dados.forEach(val => console.log(val));
}
lerArquivo(caminhoArquivo);
