function meuEvento(){

    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    let cont = 0;
    function recebeEventoForm (evento){
        evento.preventDefault();

       const nome = form.querySelector('.nome');
       const sobrenome = form.querySelector('.sobrenome');
       const peso = form.querySelector('.peso');
       const altura = form.querySelector('.altura');

       function pessoasObjt(nome, sobrenome,peso,altura){
            
        return {nome, sobrenome,peso, altura}
       }
       pessoas.push( pessoasObjt(nome.value, sobrenome.value, peso.value, altura.value));

       console.log(pessoas)
       resultado.innerHTML += `<p>${nome.value} | ${sobrenome.value} | ${peso.value} | ${altura.value} </p> `;
    }
    form.addEventListener('submit', recebeEventoForm);

}


meuEvento();