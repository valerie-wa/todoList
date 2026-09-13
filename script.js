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
    const taskText = document.createElement('span');
    taskText.textContent = task;
    
    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';

    liItem.appendChild(checkBox);
    liItem.appendChild(taskText);
    liItem.appendChild(deleteButton);

    todoList.appendChild(liItem);

    checkBox.addEventListener('change', function(){
        if(this.checked){
            taskText.style.textDecoration = 'line-through';
        } 
        if(!this.checked){
            taskText.style.textDecoration = 'none';
        }
    });

    deleteButton.addEventListener('click', function(){
        todoList.removeChild(liItem);
    });
}
//maybe make checkbox and delete seperate functions