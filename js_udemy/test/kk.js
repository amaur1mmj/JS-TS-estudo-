const n = '123456789'

array = Array.from(n);
let k = array.slice(0,array.length-2);
console.log(array);
console.log(k)



let cont = array.length+1;

let acumulador =  array.reduce((ac,val)=>{
    ac += val* cont;
   // console.log(ac);
    cont--;
    return ac;
},0);

//console.log(acumulador);

// function calcDigitoCpf(ac){ 
    
//     const digit = 11- (ac % 11 );
//     console.log(digit)

//     return digit < 9 ? digit : 0; 

// };

// console.log(calcDigitoCpf(237))

const l = array.join("")
console.log(l)