// Captura os novos elementos do DOM
const inputTarefa = document.getElementById('input-tarefa');
const btnAdicionar = document.getElementById('btn-adicionar');
const listaTarefas = document.getElementById('lista');

// Adiciona um listener ao botão de adicionar
btnAdicionar.addEventListener('click', adicionarTarefa);

// Adiciona um listener para a tecla 'Enter' no campo de input
inputTarefa.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        adicionarTarefa();
    }
});

function adicionarTarefa() {
    const textoTarefa = inputTarefa.value.trim();

    if (textoTarefa !== "") {
        // 1. Cria o elemento da tarefa com as NOVAS CLASSES
        const itemTarefa = document.createElement('div');
        itemTarefa.classList.add('item-tarefa'); // Nova classe principal

        // 2. Cria o span para o texto
        const textoSpan = document.createElement('span');
        textoSpan.textContent = textoTarefa;
        textoSpan.classList.add('texto-item'); // Nova classe para o texto

        // 3. Cria o botão de remoção
        const btnRemover = document.createElement('button');
        btnRemover.textContent = 'Remover';
        btnRemover.classList.add('btn-remover'); // Nova classe para o botão
        
        // 4. Adiciona o listener para remover a tarefa
        btnRemover.addEventListener('click', () => {
            listaTarefas.removeChild(itemTarefa);
        });
        
        // 5. Adiciona o listener para marcar como concluída (toggle)
        itemTarefa.addEventListener('click', (e) => {
            // Garante que o clique não foi no botão de remover
            if (e.target !== btnRemover) {
                itemTarefa.classList.toggle('concluida'); 
            }
        });

        // 6. Monta a estrutura
        itemTarefa.appendChild(textoSpan);
        itemTarefa.appendChild(btnRemover);
        listaTarefas.appendChild(itemTarefa);

        // Limpa o input
        inputTarefa.value = '';
    }
}