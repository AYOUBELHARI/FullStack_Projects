import { content, navButtons, el, renderHome, MENU, renderAbout, renderMenu } from "./main.js";

/* ---------- TABS ---------- */
const pages = { Home: renderHome, Menu: renderMenu, About: renderAbout };

const showPage = (name) => {
    content.replaceChildren(pages[name]()) // swap the old page for the new one
    navButtons.forEach(btn => btn.classList.toggle('active', btn.textContent === name))
}

navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        showPage(btn.textContent)
    })
})

showPage('Home');   // what you see on first load