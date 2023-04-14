function Produto(nome, preco, estoque){

    Object.defineProperty(this, 'estoque', {
        enumerable: false, //* monstra a chave
        value: estoque, //* valor
        writable: false, //* pode ser alterada
        configurable: true, //* que pode ser configurada
        //! essa fator de configurable, implica que podemos usar outra defineProperty em outro lugar como novas configuraçãos desejadas
    });

    Object.defineProperties(this ,{
        nome:{
            enumerable: true, //* monstra a chave
            value: nome, //* valor
            writable: true, //* pode ser alterada
            configurable: true, //* que pode ser configurada
                
        },
        preco:{
            enumerable: true, //* monstra a chave
            value: preco, //* valor
            writable: true, //* pode ser alterada
            configurable: true, //* que pode ser configurada
           
        }
    });
}

const p1 = new Produto('camisa', 45, 10);
console.log(Object.keys(p1))