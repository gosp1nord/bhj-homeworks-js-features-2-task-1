

const btnAdd = document.getElementById('tasks__add');
btnAdd.addEventListener('click', addTask);
const listTasks = document.querySelector('.tasks__list');
listTasks.addEventListener('click', removeTask);


function removeTask(event) {
    if (event.target.classList.contains('task__remove')) {
        event.target.closest('.task').remove()
    }
}


function addTask(event) {
    event.preventDefault();
    const textInput = document.getElementById('task__input');
    const text = textInput.value.trim();
    textInput.value = '';
    if (text) {
        const listTasks = document.querySelector('.tasks__list');
        listTasks.insertAdjacentHTML('afterbegin', `
            <div class="task">
                <div class="task__title">${text}</div>
                <a href="#" class="task__remove">&times;</a>
            </div>
        `);
    }
}

