export function initNavbar() {
    const menuToggle = document.getElementById('menu-toggle');
    const navOverlay = document.getElementById('nav-overlay');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!menuToggle || !navOverlay) return;

    menuToggle.addEventListener('click', () => {
        const isOpen = menuToggle.classList.toggle('active');
        navOverlay.classList.toggle('open');
        menuToggle.setAttribute('aria-expanded', isOpen);
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navOverlay.classList.remove('open');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });
}