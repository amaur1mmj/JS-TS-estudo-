const mongoose = require('mongoose');

//*exemplo de um esquema de tabela
const HomeSchema = new mongoose.Schema({
    titulo: {type: String ,  require: true },
    descricao: String
});

const HomeModel = mongoose.model('Home', HomeSchema);

module.exports = HomeModel;