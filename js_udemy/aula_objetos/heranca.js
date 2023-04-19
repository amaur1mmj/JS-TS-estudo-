function Produto(nome,preco){
    this.nome = nome;
    this.preco =preco;
}

Produto.prototype.aumento = function(quantia){
    this.preco += quantia;
};
Produto.prototype.desconto = function(quantia){
    this.preco -= quantia;
}

function Camiseta(nome,preco, cor){
    Produto.call(this,nome,preco); //*linkando a função pai com a filha 
}
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta; //* retornando o construtor para classe novamente 

Camiseta.prototype.aumento = function(percentual){ //* Modificando uma função da classe pai 
    this.preco = this.preco +(this.preco *(percentual/100));
}

function Caneca(nome,preco, material, estoque){
    Produto.call(this, nome, preco);
    this.material = material;

    Object.defineProperty(this, 'estoque',{
        enumerable: true,
        configurable: false,

        get: function(){
            return estoque;
        },

        set: function(valor){
            if(typeof valor !== 'number') return;
            estoque = valor;
        }
    });
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;



const produto = new Produto('Gen', 111);
const camiseta = new Camiseta('manga longa', 40, 'azul');
const caneca = new Caneca('Sem asa', 12, 'ceramica');
caneca.estoque = 10;

console.log(produto);
console.log(camiseta);
console.log(caneca,  caneca.estoque);

