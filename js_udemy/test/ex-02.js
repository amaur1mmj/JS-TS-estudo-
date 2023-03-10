
function ePaisagem(largura, altura){
    return(largura > altura);
}

const paisagem = (altura, largura) => largura>altura;
console.log(`é uma paisagem? ${paisagem(800,400)}`);

