function* gerador(){
    //codigo bll
    yield 1 ;
    //codigo bll
    yield 2 ;
    //codigo bll
    yield 3 ;
}

function* gerador2(){
      yield* gerador();  
    //codigo bll
      yield 4 ;
      //codigo bll
      yield 5 ;
      //codigo bll
      yield 6 ;
}

const g1 = gerador();
const g2 = gerador2();


console.log(g1.next().value + ' AQUIIIIIIII');

for(let valor of g2){
    console.log(valor)
}