const timer  = document.querySelector('.timer');

let segundos = 0;
let temp = 0;
let cor = 0;

document.addEventListener('click', (e) =>{
    const el = e.target; 
    console.log(el);

    if(el.classList.contains('start')){
        
        timer.classList.remove('pausado') || timer.classList.remove('resetando');
        clearInterval(temp);
        startClock();
    }

    if(el.classList.contains('stop')){
        
        timer.classList.remove('resetando');
        timer.classList.add('pausado');
        clearInterval(temp);
    }
    
    if(el.classList.contains('reset')){
        
        timer.classList.add('resetando');
        clearInterval(temp);
        timer.innerHTML='00:00:00';
        segundos = 0;
    }
});

function generateTimer(segundos){
    const data = new Date(segundos * 1000);

    return data.toLocaleTimeString('pt-BR',{
        hour12:false,
        timeZone: 'UTC'
    });
}

function startClock(){

     temp = setInterval(() => {
        segundos++;
        timer.innerHTML = generateTimer(segundos);

    },1000);
} 


