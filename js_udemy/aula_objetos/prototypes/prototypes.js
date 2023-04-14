function Produto(nome, preco){
    this.nome =nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco *(percentual /100));

};

Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco *(percentual /100));
};

const p1 = new Produto('Camiseta', 50);
p1.desconto(100);
console.log(p1);

const p2 = {
    nome: 'Caneca',
    preco: 20
};

Object.setPrototypeOf(p2, Produto.prototype);

p2.aumento(50);
console.log(p2);

const p3 = Object.create(Produto.prototype) //*passando o prototype diretamente usando a função em questão
p3.preco = 10;
p3.aumento(100);
console.log(p3)

const p4 = Object.create(Produto.prototype,{
    nome: {
        writable:true,
        configurable:true,
        enumerable:true,
        value: 'Calça',
    },
    preco: {
        writable:true,
        configurable:true,
        enumerable:true,
        value: 70, 
    },
    tamanho: {
        value:'G',
        enumerable:true,
        configurable:true,
        writable:true,
    }
});

p4.aumento(100);
console.log('P4: ', p4)