

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
    const blockTask = document.createElement('div');
    blockTask.setAttribute('class', 'task');
    const taskTitle = document.createElement('div');
    taskTitle.setAttribute('class', 'task__title');
    taskTitle.innerText = textInput.value;
    blockTask.appendChild(taskTitle);
    taskTitle.insertAdjacentHTML('afterend', '<a href="#" class="task__remove">&times;</a>');

    const listTasks = document.querySelector('.tasks__list');
    listTasks.appendChild(blockTask);
    textInput.value = '';
}

