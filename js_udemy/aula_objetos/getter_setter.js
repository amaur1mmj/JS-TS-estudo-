function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    
    let estoquePrivado = estoque
    Object.defineProperty(this, 'estoque', {
        enumerable: true, //* monstra a chave
        configurable: true, //* que pode ser configurada
        get: function(){
            return estoquePrivado;
        },
        set:(valor)=>{
            if (typeof valor !== 'number'){
                throw new TypeError('Ablahsabçhaubçahbçah');    
            }

            estoquePrivado = valor;
        }

    });
 
}
const p1 = new Produto('camisa', 45, 10);
p1.estoque = 20
console.log(p1,p1.estoque);