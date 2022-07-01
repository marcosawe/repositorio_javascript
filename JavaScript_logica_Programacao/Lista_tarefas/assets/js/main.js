function listaTarefas(){
    const novaTarefa = document.querySelector('.nova-tarefa');
    const botaoTarefa = document.querySelector('.botao-tarefa');
    const tarefas = document.querySelector('.tarefas');

    novaTarefa.addEventListener('keypress',(event)=>{ // Obtando o evento de precionar enter;
        if(event.keyCode===13){
            if(!novaTarefa.value) return;
            criaTarefa(novaTarefa.value)
        }
    })

    const limpaInput = ()=>{ // Função que limpa input
        novaTarefa.value = '';
        novaTarefa.focus();
    }

    const criaBotaoApagar = (li)=>{ //Cria um botão para apagar oque foi escrito
        li .innerHTML += " "
        const botaoApagar = document.createElement('button');
        botaoApagar.innerHTML = 'Apagar';
        botaoApagar.setAttribute('class','apagar'); // Tag utilizada para setar atributos em uma variavel ou tag
        li.appendChild(botaoApagar)
    }

    const criaLI = ()=>{ // Função que cria linhas
        const li = document.createElement("li");
        return li;
    }

    const criaTarefa = (textoInput)=>{ // Função que adiciona a tarefa a uma LI;
        const li = criaLI();
        li.innerHTML = textoInput;
        tarefas.appendChild(li);   
        limpaInput();
        criaBotaoApagar(li);
        salvarTarefas();
    }

    botaoTarefa.addEventListener('click',()=>{
        if(!novaTarefa.value) return;
        criaTarefa(novaTarefa.value)
    })

    document.addEventListener('click',(event)=>{
        const el =event.target;

        if(el.classList.contains('apagar')){
            el.parentElement.remove();
            salvarTarefas();
        }

    })

    const salvarTarefas = ()=>{
        const lisTarefas = tarefas.querySelectorAll('li');
        const listaDeTarefas = [];

        for(let tarefa of lisTarefas){
            let tarefaTexto = tarefa.innerText;
            tarefaTexto =tarefaTexto.replace('Apagar','').trim();
            listaDeTarefas.push(tarefaTexto);
        }

        const tarefasJSON = JSON.stringify(lisTarefas); // Função que transforma arrays em JSON
        console.log(tarefasJSON);
        localStorage.setItem('Tarefas', tarefasJSON); //Importando uma mine base de dados do própprio navegador, ;
    }

    const adicionaTarefasSalvas = ()=>{
        const tarefas =localStorage.getItem('Tarefas');
        const listaDeTarefas = JSON.parse(tarefas); // Convertendo JSON em listas novamente;

        for (let tarefa of listaDeTarefas){
            criaTarefa(tarefa);
        }
    }

    adicionaTarefasSalvas()
};

listaTarefas()