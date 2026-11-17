import "./style.css"
import Todo from './modules/todo.js'
import {todos, addTodo} from './modules/project.js'
import renderList from './modules/render.js'

const dialog = document.querySelector("#task-dialog");
const mainAddTaskBtn = document.querySelector("#add-task-btn");
const emptyStateAddTaskBtn = document.querySelector("#empty-add-task-btn");
const closeBtn = document.querySelector("#close-task-dialog");
const cancelBtn = document.querySelector("#cancel-task-btn");
const form = document.querySelector("#task-form");
const todoListContainer = document.querySelector(".task-container");
const emptyState = document.querySelector(".empty-state");

mainAddTaskBtn.addEventListener("click", () => {
    dialog.showModal();
});
emptyStateAddTaskBtn.addEventListener("click", () => {
    dialog.showModal();
});
closeBtn.addEventListener("click", () => {
    dialog.close();
});
cancelBtn.addEventListener("click", () => {
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
    
    const newTodo = new Todo(title, description, dueDate, priority);
    addTodo(newTodo);
    renderList(todos, todoListContainer, emptyState)
    form.reset();
    dialog.close();
});