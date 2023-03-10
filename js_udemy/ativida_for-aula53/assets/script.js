const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},

]

const container = document.querySelector('.container');
const div = document.createElement('div');

function creatTag(generate){
    const tag = document.createElement(generate);
    return tag;
}

function showElementos(elementos){
    for(let i = 0; i < elementos.length; i++ ){
        let {tag, texto} = elementos[i];
        
        let inpTag = creatTag(tag)
        let createText = document.createTextNode(texto);

        //inpTag.innerHTML = texto;
        inpTag.appendChild(createText);
        div.appendChild(inpTag);

    }

}
container.appendChild(div);

showElementos(elementos);

//versão minha aqui, na real a do Otavio é bem mais clean e sem função extra só principal
