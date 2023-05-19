//* exemplo basico usando exports, module.exports ou this
// const nome = 'Batata';
// const sobrenome = 'assada';

// const falaNome =  ()=> nome + ' '+ sobrenome;

// exports.nome = nome;
// module.exports.sobrenome =sobrenome;
// exports.falaNome = falaNome;
//this.olhaso = 'olha oytra forma de exportar';

class Pessoa{
    constructor(nome){
        this.nome = nome;
    }
}

exports.Pessoa = Pessoa;