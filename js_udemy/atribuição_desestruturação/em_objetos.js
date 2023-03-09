const pessoa = {
    nome: 'Jaco',
    sobrenome: 'flamengu',
    idade: 22,
    endereco: {
        rua: 'Aquela la',
        numero: 3,
    }

}
// podemos usar a chave para renomear a variável ao nosso querer ou usar uma variável com mesmo nome da chave
//const {nome: nm , sobrenome} = pessoa
// const {nome ='Carlim', sobrenome} = pessoa // da pra setar valores padrao caso a chave não exista

// Atribuição via desestruturação 
const {endereco: {rua, numero}, endereco } = pessoa

console.log(endereco, rua , numero)

const {nome, idade, ...resto} = pessoa
console.log(nome, resto)


