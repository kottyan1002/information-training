// main.js
document.addEventListener('DOMContentLoaded', function() {
    const todoList = document.getElementById('todoList');
    loadTodos();
    
    function saveTodoToLocalStorage(todoText) {
        let todos = JSON.parse(localStorage.getItem('todos')) || [];
        todos.push(todoText); // 
        localStorage.setItem('todos', JSON.stringify(todos)); 
    }

    function loadTodos() {
        let todos = JSON.parse(localStorage.getItem('todos')) || [];
        todos.forEach(function(todo) {
            addToDoToList(todo);
        });
    }

    window.addToDo = function() {
        const todoInput = document.getElementById('todoInput');
        const todoText = todoInput.value.trim(); 
        if (todoText !== "") {
            addToDoToList(todoText);
            saveTodoToLocalStorage(todoText); 
            todoInput.value = '';
        } else {
            alert("ToDoを入力してください");
        }
    };
    
    function addToDoToList(todoText) {
        const li = document.createElement('li');
        li.textContent = todoText;
        todoList.appendChild(li);
    }
});
