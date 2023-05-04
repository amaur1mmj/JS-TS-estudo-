class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    falar(){
        console.log(`${this.nome} esta FALANDO `);
    }
    comer(){
        console.log(`${this.nome} esta comendo `);
        }
}

const p1 = new Pessoa('Iruama', 'Olem')
p1.falar();

