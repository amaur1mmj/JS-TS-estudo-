// fetch('pessoas.json')
// .then(reposta => reposta.json())
// .then(json => carregaElementosPagaina(json));

//* Usando axios como alternativa para fetch
axios('pessoas.json')
.then(resposta => carregaElementosPagaina(resposta.data));

function carregaElementosPagaina(json){
    const table = document.createElement('table');

    for(let pessoa of json){
        const tr = document.createElement('tr');

        let td = document.createElement('td');
        td.innerHTML = pessoa.nome;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = pessoa.idade;
        tr.appendChild(td);

        table.appendChild(tr);
    }
    const resultado = document.querySelector('.resultado');
    resultado.appendChild(table);
}