import "./style.css"
import {Todo, updateTodo} from './modules/todo.js'
import {renderTodoList, renderProjects} from './modules/render.js'
import {projects, currentProject, addProject, selectProject} from './modules/project.js';

const dialog = document.querySelector("#task-dialog");
const mainAddTaskBtn = document.querySelector("#add-task-btn");
const emptyStateAddTaskBtn = document.querySelector("#empty-add-task-btn");
const closeBtn = document.querySelector("#close-task-dialog");
const cancelBtn = document.querySelector("#cancel-task-btn");
const form = document.querySelector("#task-form");
const todoListContainer = document.querySelector(".task-container");
const emptyState = document.querySelector(".empty-state");
const state = {
    currentTodo: null
}
const projectListContainer = document.querySelector("#project-list");
const personal = addProject('Personal');
const work = addProject('Work');

selectProject(personal.id);
renderProjects(projects, projectListContainer)

// console.log(projects);
// console.log(currentProject.name); // Personal
// console.log(currentProject.todos); // []

mainAddTaskBtn.addEventListener("click", () => {
    state.currentTodo = null;
    dialog.showModal();
});
emptyStateAddTaskBtn.addEventListener("click", () => {
    state.currentTodo = null;
    dialog.showModal();
});
closeBtn.addEventListener("click", () => {
    form.reset();
    dialog.close();
});
cancelBtn.addEventListener("click", () => {
    form.reset();
    dialog.close();
});
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    console.log([...formData.entries()]);
    const title = formData.get("title");
    const description = formData.get("description");
    const dueDate = formData.get("dueDate");
    const priority = formData.get("priority");
    if (!state.currentTodo) {
        const newTodo = new Todo(title, description, dueDate, priority);
        currentProject.todos.push(newTodo)
    } else {
        updateTodo(state.currentTodo, title, description, dueDate, priority);
    }
    renderTodoList(currentProject.todos, todoListContainer, emptyState, state)
    state.currentTodo = null;
    form.reset();
    dialog.close();
    // console.log(projects)
});