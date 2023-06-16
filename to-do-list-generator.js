const form = document.getElementById('myform');
const inputEle = document.getElementById('input');
const todo_UL_Ele = document.getElementById('todo-list');

const todos = JSON.parse(localStorage.getItem('todos'));

if (todos) {
    todos.forEach((todo) => addTodo(todo));
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    addTodo();
});

const addTodo = (todo) => {
    let todoText = input.value;

    if (todo) {
        todoText = todoText;
    }

    if (todoText) {
        const todoEle = document.createElement('li');
        if (todo && todo.completed) {
            todoEle.classList.add('completed');
        }

        todoEle.innerText = todoText;

        todoEle.addEventListener('click', () => {
            todoEle.classList.toggle('completed');

            updateLS();
        });

        todoEle.addEventListener('contextmenu', (e) => {
            e.preventDefault();

            todoEle.remove();
            updateLS();
        });

        todo_UL_Ele.appendChild(todoEle);
        input.value = '';

        updateLS();
    }
};

function updateLS() {
    todosEle = document.querySelectorAll('li');

    const todos = [];

    todosEle.forEach((todoEle) => {
        todos.push({
            text: todoEle.innerText,
            completed: todoEle.classList.contains('completed'),
        });
    });

    localStorage.setItem('todos', JSON.stringify(todos));
}
