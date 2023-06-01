import GerarSenhas from './GerarSenhas'

export default function(tm,op){
    const gs = new GerarSenhas();
    
    let senha= [];
    if(tm){    
        for(let i = 0; i< tm; i++){
            if(gs.maiuscula(op)) senha.push(gs.maiuscula(op));
            if(gs.minuscula(op)) senha.push( gs.minuscula(op));
            if(gs.numeric(op)) senha.push(gs.numeric(op));
            if(gs.simbolo(op)) senha.push(gs.simbolo(op));
        
        }
    }
    return senha.join('').slice(0,tm);

}
