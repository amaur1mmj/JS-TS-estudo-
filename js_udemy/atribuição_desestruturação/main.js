// o ... se chama rest, e ele volta todo o restante que não foir marcado de uma vez (resto msm)

const lista = [400,600,700,1000,1300,9999]

const [um,dois,...resto] = lista

const [,aqui, , ,eaqui] = lista
console.log(aqui, eaqui) //podemos pular indeces tbm

console.log(um, dois)
console.log(resto)
