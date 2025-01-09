document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    // Fetch and display todos
    const fetchTodos = async () => {
        const res = await fetch('/api/todos');
        const todos = await res.json();
        todoList.innerHTML = '';
        todos.forEach(todo => addTodoToDOM(todo));
    };

    // Add a new todo
    const addTodoToDOM = (todo) => {
        const li = document.createElement('li');
        li.textContent = todo.text;
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = async () => {
            await fetch(`/api/todos/${todo.id}`, { method: 'DELETE' });
            fetchTodos();
        };
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    };

    todoForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const newTodo = { text: todoInput.value };
        await fetch('/api/todos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newTodo),
        });
        todoInput.value = '';
        fetchTodos();
    });

    fetchTodos();
});

