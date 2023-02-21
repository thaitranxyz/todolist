//selectors 
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//event listeners 
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

//functions
function addTodo(event) {
    //prevent form from submitting
    event.preventDefault();

    if (todoInput.value != "")
    {
        //create todo div
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');

        //create li 
        const newTodo = document.createElement("li");
        newTodo.innerText = todoInput.value;
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);

        //completed button 
        const completedButton = document.createElement('button');
        completedButton.innerHTML = '<i class="fas fa-check"></i>';
        completedButton.classList.add('completed-btn');
        todoDiv.appendChild(completedButton);

        //delete button 
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
        deleteButton.classList.add('delete-btn');
        todoDiv.appendChild(deleteButton);

        //append to list 
        todoList.appendChild(todoDiv);

        //clear input 
        todoInput.value = "";
    }

    
    
}

function deleteCheck(e) {
    console.log(e.target);
    const item = e.target;
    //Delete todo
    if (item.classList[0] === 'delete-btn' || item.classList === 'fa-trash') {
        const todo = item.parentElement;
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function() {
            todo.remove();
        });
    }

    //Checked todo
    if (item.classList[0] === 'completed-btn') { 
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}