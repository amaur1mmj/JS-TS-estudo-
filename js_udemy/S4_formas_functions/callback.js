function random(min = 1000, max= 3000){
    const num  = Math.random() * (max-min) +min;
    return Math.floor(num);
}

console.log(random())

function f1(callback){
    
    setTimeout(()=> {
        console.log('f1')
        if (callback) callback();
    },random()); 
}

function f2(callback){
    setTimeout(()=> {
        console.log('f2')
        if (callback) callback();
    },random());
}

function f3(callback){
    setTimeout(()=> {
        console.log('f3')
        if (callback) callback();
    },random());
}

f1( function(){
    f2(()=>{
        f3(()=>{
            console.log('OOOPAAA');
        });
    });
});
