import "./style.css"
import Todo from './modules/todo.js'
import {todos, addTodo} from './modules/project.js'
import createTodoElement from './modules/render.js'

const dialog = document.querySelector("#task-dialog");
const mainAddTaskBtn = document.querySelector("#add-task-btn");
const emptyStateAddTaskBtn = document.querySelector("#empty-add-task-btn");
const closeBtn = document.querySelector("#close-task-dialog");
const cancelBtn = document.querySelector("#cancel-task-btn");
const form = document.querySelector("#task-form");
const todoListContainer = document.querySelector(".task-container");
const emptyState = document.querySelector(".empty-state");

mainAddTaskBtn.addEventListener("click", () => {
    // Handle add task functionality
    dialog.showModal();
});
emptyStateAddTaskBtn.addEventListener("click", () => {
    // Handle add task functionality
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
    const todoElement = createTodoElement(newTodo);
    // Append the new todo element to the DOM
    todoListContainer.appendChild(todoElement);
    emptyState.style.display = "none";
    form.reset();
    dialog.close();
});