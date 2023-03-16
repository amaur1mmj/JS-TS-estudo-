
/* 
   try{
    console.log('shadsa');
    console.log(g);
}catch(err){
    console.log(err)

} finally{
    console.log('verificando processos!')
    //* Funciona basicamente como um bloco que sempre será executado durante o try catch, dando erro ou não
    //* uma das utilidades é que podemos deixar uma saída padrão já que quando encontramos o erro no try ele para a execução do bloco e vai deretamente ao catch.   
}

*/

function retornaHora(data){
    if(data && !(data instanceof Date)){
        throw new TypeError('Esperando uma instância de Date.');
    }

    if(!data){
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR',{
        hour12: false,
        minute: '2-digit',
        second: '2-digit',
        hour: '2-digit'
    })
}

try {
    const data = new Date('01-01-1970 12:44:33');
    const hora = retornaHora(data);
    console.log(hora);
    const hora2 = '01-01-1970 12:44:33';
    console.log(retornaHora(hora2));
}catch(err){
    const dataAtual = new Date();
    console.log(`Ocorreu um erro, voltado a data atual completa!\n ${dataAtual}`);
}finally{
    console.log(' (:^D)')
}