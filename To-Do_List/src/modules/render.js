import {saveProjects} from "./storage.js"
import {projects} from "./project.js"

const createTodoElement = (todo, todos, container, emptyState, state) => {
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
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.checked = todo.completed
    div.classList.toggle('completed', todo.completed)
    checkbox.addEventListener('change', () => {
        todo.completed = checkbox.checked
        div.classList.toggle('completed', todo.completed)
        saveProjects(projects)
    })
    const deleteBtn = document.createElement('button')
    deleteBtn.type = 'button'
    deleteBtn.textContent = 'Delete'
    deleteBtn.classList.add('delete-btn')
    deleteBtn.addEventListener('click', () => {
        const index = todos.findIndex(t => t.id === todo.id)
        if (index !== -1) {
            todos.splice(index, 1)
            renderTodoList(todos, container, emptyState, state)
            saveProjects(projects)
        }
    })
    const editBtn = document.createElement('button')
    editBtn.type = 'button'
    editBtn.textContent = 'Edit'
    editBtn.classList.add('edit-btn')
    editBtn.addEventListener('click', () => {
        const taskDialog = document.querySelector("#task-dialog");
        const taskForm = document.querySelector("#task-form");
        const titleInput = taskForm.querySelector("input[name='title']");
        const descriptionInput = taskForm.querySelector("textarea[name='description']");
        const dueDateInput = taskForm.querySelector("input[name='dueDate']");
        const priorityInput = taskForm.querySelector("select[name='priority']");
        
        titleInput.value = todo.title;
        descriptionInput.value = todo.description;
        dueDateInput.value = todo.dueDate;
        priorityInput.value = todo.priority;
        
        state.currentTodo = todo;
        taskDialog.showModal();
    })
    div.appendChild(checkbox)
    div.appendChild(title)
    div.appendChild(description)
    div.appendChild(dueDate)
    div.appendChild(priority)
    div.appendChild(deleteBtn)
    div.appendChild(editBtn)
    return div
}

const createProjectElement = (project) => {
    const div = document.createElement('div')
    div.classList.add('project-item')
    const btn = document.createElement('button')
    btn.classList.add('nav-link')
    btn.textContent = project.name
    btn.setAttribute('data-project-id', project.id)
    const deleteBtn = document.createElement('button')
    deleteBtn.type = 'button'
    deleteBtn.textContent = 'x'
    deleteBtn.classList.add('delete-project-btn')
    deleteBtn.setAttribute('data-project-id', project.id)
    deleteBtn.setAttribute('aria-label', `Delete ${project.name} project`)
    div.appendChild(btn)
    div.appendChild(deleteBtn)
    return div
}

export function renderTodoList(todos, container, emptyState, state) {
    container.querySelectorAll('.todo-item').forEach(item => item.remove())
    // Update task counter
    const taskTotal = document.querySelector('.task-total')
    taskTotal.textContent = `${todos.length} ${todos.length === 1 ? 'task' : 'tasks'}`
    // Update empty state
    emptyState.style.display = todos.length === 0 ? 'flex' : 'none'
    // Render todos
    todos.forEach(todo => {
        const todoElement = createTodoElement(todo, todos, container, emptyState, state)
        container.appendChild(todoElement)
    })
}

export function renderProjects(projects, container) {
    container.innerHTML = ''
    projects.forEach(project => {
        const projectElement = createProjectElement(project)
        container.appendChild(projectElement)
    })
    // console.log("Rendered project elements:", container.children.length)
    // console.log("Project list HTML:", container.innerHTML)
}