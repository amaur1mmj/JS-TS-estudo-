function mostrarhora(){
    let data = new Date();

    return data.toLocaleTimeString('pt-BR',{
        hour12: false
    });
}

// * A função setInerval faz com que executamos uma uma função ou bloco de condigo quantas vezes for necessaria, passando uma função anonima como primeiro bloco e como segundo agumento o tempo que levará para função ser chamada novamente, lembrando que a função toma como entrada milissegundos.
const timer = setInterval(()=> {
    console.log(mostrarhora());
}, 1000);

// * Como uma das alternativas para interroper o processo da função anterior, a setTimeout decide quantas vezes será executada uma função, usando o mesmo corpo de chamda da função anterior 

setTimeout(()=> {
   clearInterval(timer);
    
}, 3000);

  setTimeout(() => {
    console.log('o.0');
},3000);

