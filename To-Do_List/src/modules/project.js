export const projects = [];

export function Project(name) {
    this.name = name;
    this.id = crypto.randomUUID();
    this.todos = [];
}

export const defaultProject = new Project('Default')
projects.push(defaultProject)

export let currentProject = defaultProject

export function addProject(name) {
    const newProject = new Project(name)
    projects.push(newProject)
    return newProject
}

export function selectProject(id) {
    const index = projects.findIndex(p => p.id === id)
    if (index !== -1) currentProject = projects[index]
}