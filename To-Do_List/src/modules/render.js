function createTodoElement(todo) {
    const div = document.createElement('div')
    div.classList.add('todo-item')
    const title = document.createElement('h3')
    title.textContent = todo.title
    const description = document.createElement('p')
    description.textContent = todo.description
    const dueDate = document.createElement('p')
    dueDate.textContent = `Due: ${todo.dueDate}`
    const priority = document.createElement('p')
    priority.textContent = `Priority: ${todo.priority}`
    div.appendChild(title)
    div.appendChild(description)
    div.appendChild(dueDate)
    div.appendChild(priority)
    return div
}

export default function renderTodoList(todos, container, emptyState) {
    container.querySelectorAll('.todo-item').forEach(item => item.remove())
    emptyState.style.display = todos.length === 0 ? 'flex' : 'none'
    todos.forEach(todo => {
        const todoElement = createTodoElement(todo)
        container.appendChild(todoElement)
    })
}