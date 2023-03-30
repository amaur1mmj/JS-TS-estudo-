const execFuncao = function(){
    console.log('Uma função aqiui!');
}

function execDaExec(funcao){
    funcao();
}

execDaExec(execFuncao);

const funcaoArrow = () => {
    console.log("Podendo criar dessa forma também")
}