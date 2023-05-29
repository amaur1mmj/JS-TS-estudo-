export default class ValidaCPF{
    constructor(cpf){
        Object.defineProperty(this, 'cpfLimpo',{
            writable:false,
            enumerable:true,
            configurable:false,
            value: cpf.replace(/\D+/g, '')
        });
    }

    ésequencia(){
        return this.cpfLimpo[0].repeat(11) == this.cpfLimpo;
    }

    geraNovoCPF(){
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidaCPF.geraDigito(cpfSemDigitos);
        const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1);
        Object.defineProperty(this, 'novoCPF',{
            enumerable:true,
            writable:false,
            configurable:true,
            value: cpfSemDigitos + digito1 + digito2
        })
    }

    static geraDigito(cpfSemDigitos){
        let total = 0;
        let reverso = cpfSemDigitos.length +1 ;
        for(let stringNumerica of cpfSemDigitos){
            total += reverso *Number(stringNumerica);
            reverso--;
        }
        const digito = 11-(total % 11);
        return digito <=9 ? String(digito) : '0';

    }

    valida(){
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.ésequencia()) return false;
        this.geraNovoCPF();

        return this.novoCPF === this.cpfLimpo;
    }

}


