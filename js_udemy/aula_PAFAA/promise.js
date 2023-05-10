function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max-min)+min);
}

function esperaAi(msg, tempo){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{

            if(typeof msg !== 'string') {
                reject('Deu erro familia!');
                return;
            }

            resolve(msg.toUpperCase() + ' -Pazei na promiçi');
        }, tempo);
    })
}

const promises= [
    //'primeiro valor',
    esperaAi('promise 1', rand(1,5)),
    esperaAi('promise 2', rand(1,5)),
    esperaAi('promise 3', rand(1,5)),
    //esperaAi(10,rand(1,5)),
    //'kkkkkkkk'
]

//* executa todas as promises de uma vez
// Promise.all(promises).then((valor)=>{
//     console.log(valor);
// }).catch((err)=>{
//     console.log(err);
// })

//* retorna a primeira resolvida
// Promise.race(promises).then((valor)=>{
//     console.log(valor);
// }).catch((err)=>{
//     console.log(err);
// })

//* retorna a promise resolvida(exemplo de algo que queria em memoria cache)
//* o reject é o inverso, caso tenha algo que queira limpar antes de alguma ação

function baixaPagina(){
    const emChache = true;

    if(emChache){
        return Promise.resolve('Pagina em cache!');
    } else {
        return esperaAi('Baixando a página', 2000);
    }
}

baixaPagina().then((dadosPagina) =>{
    console.log(dadosPagina);

}).catch(e =>console.log('Erro', e));