
function randomsNumbers(min = 0, max = 100){
     min = Math.ceil(min);
     max = Math.floor(max);
    const  aleatorio = Math.floor(Math.random() * (max));
    return (aleatorio); 
}

function fizzBuzz(num){
    if (typeof num != 'number') return num;
    
    if(num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
    if(num % 3 === 0 ) return 'Fizz';
    if(num % 5 === 0) return 'Buzz';
   
    //return k.length != 0 ? k[k.length-1] : num ;
     return num;
    
    }
//fizzBuzz(randomsNumbers())

 let num = fizzBuzz(3)
console.log(num)
