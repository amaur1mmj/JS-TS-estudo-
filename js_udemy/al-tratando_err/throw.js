
try{
console.log(kk)

}catch(err){
    console.log('vc é meio burro')
}


function soma(x,y){
    if (typeof x !== 'number' || typeof y !== 'number') 
        throw new Error('precisa ser numeros hahahahahaha');

        // * a função throw() funciona como um gerador pessoal do retorno do error, ou seja, podemos tratar internamente e armazenar essa informação ou jogar ela de maneira discreta ao usuário final
        // * seguindo a mesma, se usar  throw new ---(), podemos apontar uma saída de error existente ou criar nossa propria.  

    return x+y;
}

try{
    console.log(soma(1,3));
    console.log(soma(1,'4'));
    

}catch(err){
    console.log(err);

}
