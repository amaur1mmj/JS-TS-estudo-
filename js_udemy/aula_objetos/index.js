const objeto = {
    1:"nome",
    teste:"isso"
}

console.log(objeto.teste)

// usando uma fabrica de objetos

function objts(nome, last,ok) {
    return {nome, last , ok} // O js sub entende que os parametros de entrada da funcao são os mesmo q irao ser passados, e com isso acaba gerando com o msm valor(nome)
}

const obj = objts('kkkkk','jjjj','ok')

console.log(obj.ok)
