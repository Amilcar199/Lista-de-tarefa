function adicionarTarefa() {
    const input = document.getElementById('task-input').value;
    if (input.trim() === '') return; // Não adiciona tarefas vazias

    const li = document.createElement('li');
    li.innerHTML = `${input} <span onclick="deletarTarefa(this)">❌</span>`;

    document.querySelector('ul').appendChild(li);
    document.getElementById('task-input').value = '';
}

function deletarTarefa(element) {
    element.parentElement.remove();
}
