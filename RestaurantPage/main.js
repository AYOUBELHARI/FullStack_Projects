export const content = document.querySelector('#content');
export const navButtons = document.querySelectorAll('nav button');
 
// small helper: create an element, optionally with a class and text
export const el = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
};

/* ---------- HOME ---------- */
export const renderHome = () => {
    const section = el('section', 'hero');
 
    const img = el('img');
    img.src = './restaurant.svg';
    img.alt = 'A steaming plate of food on a warm wooden table';
 
    const text = el('div');
    text.append(
        el('h1', '', 'Wood-fired food, made with love.'),
        el('p', '', "Welcome to Olive & Ember, the neighborhood kitchen where every dish is cooked over a real fire and served like it's Sunday dinner at home."),
        el('p', '', "Our bread is baked each morning, our vegetables come from farms down the road, and our sauces simmer for hours. Come hungry, leave happy.")
    );
 
    section.append(img, text);
    return section;
};

/* ---------- MENU ---------- */
export const MENU = [
    { name: 'Ember Margherita',   price: '$14', description: 'Wood-fired pizza with tomato, fresh mozzarella and basil.' },
    { name: 'Smoked Chicken',     price: '$18', description: 'Slow-roasted over the fire with lemon and herbs.' },
    { name: 'Harvest Salad',      price: '$11', description: 'Seasonal greens, roasted vegetables and house vinaigrette.' },
    { name: 'Olive Oil Cake',     price: '$8',  description: 'Soft, golden and served with whipped cream.' }
];
 
export const renderMenu = () => {
    const section = el('section', 'menu');
    section.append(el('h2', '', 'Our Menu'));
 
    MENU.forEach(item => {
        const row = el('div', 'item');
        const head = el('div', 'item-head');
        head.append(el('h3', '', item.name), el('span', 'price', item.price));
        row.append(head, el('p', '', item.description));
        section.append(row);
    });
 
    return section;
};

/* ---------- ABOUT ---------- */
export const renderAbout = () => {
    const section = el('section', 'about');
 
    const info = el('div', 'info');
    info.append(
        el('p', '', '123 Market Street'),
        el('p', '', '(555) 012-3456'),
        el('p', '', 'Open daily, 11:00 AM - 10:00 PM')
    );
 
    section.append(
        el('h2', '', 'About Us'),
        el('p', '', 'Olive & Ember started as a small wood oven and a big idea: good food should feel like home. Today we are a family-run kitchen serving our neighbors every day.'),
        info
    );
    return section;
};
