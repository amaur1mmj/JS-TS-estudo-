//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString

// const h1 = document.querySelector('.container h1');

// data = new Date();


// function getDiaSemana(diaSemana){
//     const semana = ['domingo','segunda-feira', 'terça-feira','quarta-feira','quinta-feira','sexta-feira','sábado'];
    
//     return semana[diaSemana];
// }

// function getMes(anoMes){
//     const mes =['janeiro','fevereiro','março', 'abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro']
    
//     return mes[anoMes];
// }

// function gerarData(data){
//     const diaSemana = data.getDay();
//     const anoMes = data.getMonth();

//     const nomeSemana = getDiaSemana(diaSemana);
//     const nomeMes = getMes(anoMes);

//     return (
//         `${nomeSemana}, ${data.getDate()} de ${nomeMes}` + ` de ${data.getFullYear()} ` + `${data.getHours()} : ${data.getMinutes()}`
//     );

// }

// h1.innerHTML = gerarData(data);


const h1 =  document.querySelector('.container h1');
const data = new Date();

h1.innerHTML = data.toLocaleDateString('pt-BR', {dateStyle: 'full'});