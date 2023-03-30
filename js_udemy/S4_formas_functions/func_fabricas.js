function criarPessoa(nome, sobrenome, altura, peso){
    return{
        nome, 
        sobrenome,
        altura: altura,
        peso: peso,

        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },

        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        fala(assunto = 'Batata!!!!!!!!'){
            return `${this.nome} está ${assunto} ${this.temp} `;
        },

        get imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
        
    };
}

const p1  = criarPessoa('jaum', 'passatempo', 1.8, 90);
const p2  = criarPessoa('karlu', 'passatempo', 1.5, 50);
const p3  = criarPessoa('loucas', 'passatempo', 1.99, 79);

p1.nomeCompleto = 'JAUM da Cerra'

console.log(p1.nomeCompleto, p1.imc);
console.log(p2.nomeCompleto, p2.imc);
console.log(p3.nomeCompleto, p3.imc);
