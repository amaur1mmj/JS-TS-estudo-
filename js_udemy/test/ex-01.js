function retornaMaior(x,y){

    if(x > y) return x;
    return y;
    //console.log(Math.max(x,y))
}

console.log(retornaMaior(9,14));

//sem tratar o igual!

const max = (x,y) => x > y? x : y;
console.log(max(23,22));