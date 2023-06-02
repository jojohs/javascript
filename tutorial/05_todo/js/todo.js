const form = document.querySelector('.todo_form')
const input = form.querySelector('input')
const ul = document.querySelector('.todo_list')

let todos = []

function saveTodo() {
    localStorage.setItem('todos',JSON.stringify(todos))
}

function removeTodo(e) {
    const li = e.target.parentNode
    li.remove()
    const newTodo = todos.filter(todo=>todo.id !== parseInt(li.id))
    todos = newTodo
    saveTodo()
}

function paintTodo(text){
    console.log(text);
    const li = document.createElement('li')
    li.id = todos.length + 1
    const span = document.createElement('span')

    li.innerHTML = text
    span.innerHTML = 'X'

    span.addEventListener('click', removeTodo)
    li.appendChild(span)

    ul.appendChild(li)
    todos.push({
        id: todos.length +1,
        text
    })
    console.log(todos)
    saveTodo()
}

function handleSubmit(e) {
    e.preventDefault()
    if(input.value === '') return
    paintTodo(input.value)
    input.value = ''
}

function loadTodo() {
    const loadTodos = localStorage.getItem('todos')
    if(loadTodos !== null) {
        const praseTodo = JSON.parse(loadTodos)
        praseTodo.forEach(todo => paintTodo(todo.text))
    }
}

function init() {
    loadTodo()
    form.addEventListener('submit', handleSubmit)
}

init()

