import "./style.css"

const dialog = document.querySelector("#task-dialog");
const mainAddTaskBtn = document.querySelector("#add-task-btn");
const emptyStateAddTaskBtn = document.querySelector("#empty-add-task-btn");
const closeBtn = document.querySelector("#close-task-dialog");
const cancelBtn = document.querySelector("#cancel-task-btn");
const form = document.querySelector("#task-form");

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
    // Handle form submission logic here
    dialog.close();
});
