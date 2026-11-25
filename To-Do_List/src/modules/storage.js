export function saveProjects(projects) {
    localStorage.setItem("projects", JSON.stringify(projects))
}

export function loadProjects() {
    let data = localStorage.getItem("projects")
    if (!data) return null
    return JSON.parse(data)
}