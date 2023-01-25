const form = document.querySelector('form');

form.addEventListener('submit',function(e){
    e.preventDefault();
    console.log('Evento prevenido');

    setResultado('HElooooooooooooo!');
});

function setResultado(msg){
    const result = document.querySelector('#result');
    result.innerHTML = '';
    const p = document.createElement('p');
    p.classList.add('paragrafo-resultado');
    p.innerHTML = msg;
    result.append(p);

}