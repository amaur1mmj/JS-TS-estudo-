function calcDigitoCpf(ac){ 
    
    const digit = 11- (ac % 11 );
    console.log(digit)

    return digit < 9 ? digit : 0; 

};

console.log(calcDigitoCpf(237))