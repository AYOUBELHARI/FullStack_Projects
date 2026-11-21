import "./style.css"
import {Todo, updateTodo} from './modules/todo.js'
import {renderTodoList, renderProjects} from './modules/render.js'
import {projects, defaultProject, currentProject, addProject, selectProject, deleteProject} from './modules/project.js';

const taskDialog = document.querySelector("#task-dialog");
const addTaskBtn = document.querySelectorAll(".add-task-btn");
const closeTaskBtns = document.querySelectorAll(".closeTaskDialog");
const taskForm = document.querySelector("#task-form");
const todoListContainer = document.querySelector(".task-container");
const emptyState = document.querySelector(".empty-state");
const state = {
    currentTodo: null
}
const projectListContainer = document.querySelector("#project-list");
const projectDialog = document.querySelector("#project-dialog")
const addProjectBtn = document.querySelectorAll(".add-project-trigger")
const closeProjectBtns = document.querySelectorAll(".closeProjectDialog")
const projectForm = document.querySelector("#project-form")

addTaskBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        state.currentTodo = null;
        taskDialog.showModal();
    });
})
closeTaskBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        taskForm.reset();
        taskDialog.close();
    });
})
taskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(taskForm);
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
    taskForm.reset();
    taskDialog.close();
    // console.log(projects)
});

projectListContainer.addEventListener("click", (event) => {
    const projectBtn = event.target.closest(".nav-link");
    if (!projectBtn) return
    const projectId = projectBtn.dataset.projectId;
    selectProject(projectListContainer, projectId);
    renderTodoList(currentProject.todos, todoListContainer, emptyState, state);
});
addProjectBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        projectDialog.showModal()
    })
})
closeProjectBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        projectForm.reset()
        projectDialog.close()
    })
})
projectForm.addEventListener("submit", (event) => {
    event.preventDefault()
    const formData = new FormData(projectForm)
    const name = formData.get("projectName")
    const newProject = addProject(name)
    renderProjects(projects, projectListContainer)
    selectProject(projectListContainer, newProject.id)
    renderTodoList(currentProject.todos, todoListContainer, emptyState, state);
    projectForm.reset();
    projectDialog.close();
})

selectProject(projectListContainer, defaultProject.id)
const personal = addProject('Personal');
const work = addProject('Work');
renderProjects(projects, projectListContainer)

// console.log(projects);
// console.log(currentProject.name); // Personal
// console.log(currentProject.todos); // []