const inpTask  = document.querySelector('.input-task');
const btnTask = document.querySelector('.btn-task');
const tasks = document.querySelector('.tasks')

function criaLi(){
    const li  = document.createElement('li');
    return li;
}

function criaBtn(li){
    li.innerText += ' ';
    const btn = document.createElement('button');
    btn.innerText = "Apagar";
    btn.setAttribute("class", "apagar");
    btn.setAttribute('title', 'Apagar tarefa!');
    li.appendChild(btn);
}

function limpaInput(){
    inpTask.value = '';
    inpTask.focus(); //* função para voltar o curso para o input
}


function criaTarefa(inputTexto){
    const li = criaLi();
    li.innerText = inputTexto;
    tasks.appendChild(li);
    limpaInput();
    criaBtn(li);
    salvarTarefas();

}

function salvarTarefas(){
    const liTarefas = tasks.querySelectorAll('li');
    const listaDeTarefas = [];

    for(let tarefa of liTarefas ){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar','').trim();
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas',tarefasJSON);


}

function addTarefasSalvas(){
    const tarefasJSON = localStorage.getItem('tarefas');
    const tarefasJs = JSON.parse(tarefasJSON);
    console.log(tarefasJs);

    for (let tarefa of tarefasJs){
        criaTarefa(tarefa);
    }
    
}


// * keypres é o evento que pegar as ações das teclas pressionadas
inpTask.addEventListener('keypress',(e)=>{
    if(!inpTask.value) return;

    if(e.keyCode  === 13){
        criaTarefa(inpTask.value);   
    }

});

btnTask.addEventListener( 'click', () => { 
    if(!inpTask.value)return;

    criaTarefa(inpTask.value);

});

document.addEventListener('click', (e) => {
    const el = e.target; 

    if(el.classList.contains('apagar')) el.parentElement.remove(); //* função responsavel por deletar o 'pai' e todos os filhos relacionados
    salvarTarefas();

});

addTarefasSalvas();
