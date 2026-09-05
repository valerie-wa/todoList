const todoForm = document.getElementById('todoForm');
const todoInput = document.getElementById('taskInput');
const todoButton = document.getElementById('addTaskButton');
const todoList = document.getElementById('todoList');

todoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const newTask = todoInput.value;
    if (newTask === ''){
        //alert("Please type a task :)");
        prompt("Please type a task :)");
    }
    addTask(newTask);
    todoInput.value = "";
});

function addTask(task) {
    const liItem = document.createElement('li');
    liItem.textContent = task;
    todoList.appendChild(liItem);
}