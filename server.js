const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.static('public'));

let todos = [];

// API: Get all todos
app.get('/api/todos', (req, res) => {
    res.json(todos);
});

// API: Add a new todo
app.post('/api/todos', (req, res) => {
    const todo = req.body;
    todo.id = Date.now();
    todos.push(todo);
    res.status(201).json(todo);
});

// API: Delete a todo
app.delete('/api/todos/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    todos = todos.filter(todo => todo.id !== id);
    res.status(204).end();
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

