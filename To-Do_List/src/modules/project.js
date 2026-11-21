export const projects = [];
export const defaultProject = addProject('Default')
export let currentProject = defaultProject

const activate = (container, id) => {
    container.querySelectorAll('.nav-link').forEach(btn => {
        if (btn.dataset.projectId === id) {
            btn.classList.add('active')
        } else {
            btn.classList.remove('active')
        }
    })
}

export function Project(name) {
    this.name = name;
    this.id = crypto.randomUUID();
    this.todos = [];
}

export function addProject(name) {
    const newProject = new Project(name)
    projects.push(newProject)
    return newProject
}

export function selectProject(container, id) {
    const index = projects.findIndex(p => p.id === id)
    if (index !== -1) {
        currentProject = projects[index]
        activate(container, id)
    }
}

export function deleteProject(id) {
    const index = projects.findIndex(project => project.id === id);
    if (index === -1) {
        alert('Project not found.');
        return false;
    }
    if (projects[index].id === defaultProject.id) {
        alert('The Default project cannot be deleted.');
        return false;
    }
    if (currentProject.id === id) {
        currentProject = defaultProject;
    }
    projects.splice(index, 1);
    return true;
}