const vdd = true

let nome = 'Jaum'
var nome2 = 'pedim'

if(vdd){
    let nome = 'carlu'
    var nome2 = 'kirim'
        console.log(nome) // carlu: bloco do if 
    {
        let nome = 'pedu'
        var nome2 = 'flamengu'
        console.log(nome) // pedu : bloco interno 
    }
}
console.log(nome, nome2) //saindo jaum (bloco global valor da variavel global)