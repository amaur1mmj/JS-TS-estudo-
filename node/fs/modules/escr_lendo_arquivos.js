const fs  = require('fs').promises;

module.exports = (caminho, dados)=>{
    //* 'w' sobrescreve tudo que tem no arquivo
    //* 'a' adiciona al final 
    fs.writeFile(caminho, dados, {flag: 'w', enco})

}

