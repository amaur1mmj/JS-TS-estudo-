const data = new Date()
console.log(data.toString())


// Data(0) > vem do marco zero da era unix. Timestamp 01/01/1970
const begin_data = new Date(0)
console.log(begin_data.toString())

const tresHoras = 60 * 60* 3 * 1000;
const umDia = 60 * 60 * 24 * 1000;

const diaHorasData = new Date(0 + tresHoras + umDia);
console.log(diaHorasData.toString());

//VAGABUNDO, DA UMA OLHANDA DE MANEIRA DESCENTE NA DOCUMENTAÇÃO DISSO AQUI CASO PRECISE!!!!


