const fs  = require('fs').promises;

module.exports = (caminho)=> {
    //* lendo arquivos
    return fs.readFile(caminho, 'utf-8');
};


