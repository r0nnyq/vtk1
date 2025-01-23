function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

function toggleSubmenu(event, submenuId) {
    event.preventDefault();
    const submenu = document.getElementById(submenuId);
    const parent = submenu.parentElement;
    parent.classList.toggle('open');
}

