export default function(){
    const simbol = [];
    
    for(let i= 33; i <=126; i++ ){
        if( i >= 3 && i<= 47 || i>= 58 && i<=65 || i>=91 && i<=96 || i>= 123 && i<= 126 ) simbol.push(String.fromCharCode(i)); 
    
    }
    return simbol;
}


