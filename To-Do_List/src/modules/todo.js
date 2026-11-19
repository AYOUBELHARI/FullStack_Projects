export function Todo(title, description, dueDate, priority) {
    if (!new.target) throw Error("use 'new' with Todo")
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
    this.completed = false
    this.id = crypto.randomUUID()
}

export function updateTodo(todo, title, description, dueDate, priority) {
    todo.title = title
    todo.description = description
    todo.dueDate = dueDate
    todo.priority = priority
}