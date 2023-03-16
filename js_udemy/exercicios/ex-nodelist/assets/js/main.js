const paragrafos = document.querySelector('.paragrafos');
const ps  = paragrafos.querySelectorAll('p');

const estilos = getComputedStyle(document.body);
const backgroundcolorBody = estilos.backgroundColor;
console.log(typeof(backgroundcolorBody), backgroundcolorBody);
const font = '#ff4';


for(let p of ps){
    p.style.backgroundColor = backgroundcolorBody;
    p.style.color = font;
}
 