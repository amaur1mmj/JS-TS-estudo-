function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor){
    if(this.saldo < valor){
        console.log(`Saldo insuficiente! Saldo sacável: ${this.saldo.toFixed(2)}`);
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
    return;
};

Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo();

};

Conta.prototype.verSaldo = function(){
    console.log(`Ag/c: ${this.agencia}/ ${this.conta} | Saldo: R$ ${this.saldo.toFixed(2)}`)
};

function CC(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
};

CC.prototype = Object.create(Conta.prototype);
CC.prototype.constructor = CC;

CC.prototype.sacar = function(valor){
    if((this.saldo + this.limite) < valor){
       console.log(`Saldo insuficiente! Saldo sacável: ${this.saldo.toFixed(2)}`);
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
}

function CP(agencia, conta, saldo){
    Conta.call(this, agencia, conta, saldo);
};

CP.prototype = Object.create(Conta.prototype);
CP.prototype.constructor = CP;


// const conta = new Conta(11,22,10);
// console.log(conta);
// conta.depositar(12);
// conta.sacar(23);

const cc = new CC(22,33,100,50);
console.log(cc);
cc.depositar(10);
cc.sacar(140);

console.log();

const cp = new CP(22,33,100);
console.log(cp);
cp.depositar(10);
cp.sacar(140);