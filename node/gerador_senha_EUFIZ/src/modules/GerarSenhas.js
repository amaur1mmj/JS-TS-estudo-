import AsscSimbol from './AsscSimbol'

export default class GerarSenhas{

    rand(max, min = 0){
        return Math.floor(Math.random()*(max - min) + min);
    }

    maiuscula(uniq){
        let upper;

        if(uniq.indexOf('u') > -1 && uniq !== '')
            return upper = String.fromCharCode(this.rand(65,91));   
        return false;

    }

    minuscula(uniq, size){
        let lower;
        
        if(uniq.indexOf('l') > -1)
            return lower = String.fromCharCode(this.rand(97,123));  
        return false;
    }

    numeric(uniq){
        let numeric;
        
        if(uniq.indexOf('n') > -1)
            return numeric = String.fromCharCode(this.rand(48,58));     
        return false;

    }
    
    simbolo(uniq){
        const simbol = AsscSimbol();  
        
        if(uniq.indexOf('s') > -1)
            return simbol[this.rand(33)]
        return false;
    }

}
