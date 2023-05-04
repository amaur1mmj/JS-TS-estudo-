class ControleRemoto{
    constructor(nome){
        this.nome = nome;
        this.volume = 0;
    }

    aumentarVolume(){
        this.volume += 2;
    }

    diminuirVolume(){
        this.volume -=2.;
    }

    //método estático
    static aviso(){
        console.log('Controle Remoto usado para blablablalba');
    }
}

const c1 = new ControleRemoto('Samsumg');
console.log(c1)
ControleRemoto.aviso();
console.log(c1)