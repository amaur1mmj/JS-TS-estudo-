const falar = {
    falar(){
        console.log(`${this.nome} esta falando!`);
    },
};
const comendo={
    comendo(){
        console.log(`${this.nome} esta comendo!`);
    },
};

const bebendo = {
    bebendo(){
        console.log(`${this.nome} esta bebendo!`);
    },
};

const pessoaPrototype = Object.assign({}, falar, comendo, bebendo);

function criaPessoa(nome,sobrenome){

    return Object.create(pessoaPrototype, {
        nome: {value:nome}, //*posso determinar as configurações do atributo!
        sobrenome:{value: sobrenome},
    });
}

const p1 = criaPessoa('Pedim', 'Do Morro');
