
function fizzBuzz(num){
    let k = 0;
    if(num % 3 == 0 ){
        console.log(`Numero ${num} é divisivel por 3 = Fizz `);
        k++;
    }
    if(num % 5 == 0){
        console.log(`NUmero ${num} é divisivel por 5 = Buzz`)
        k++;
    }
    return k === 2? console.log('Número é divisivel por 3 e 5 = FizzBuzz') : num;

}


fizzBuzz(2);