import { initLoader } from './loader.js';
import { initNavbar } from './navbar.js';
import { initAnimations } from './animations.js';
import { initScrollAnimations } from './scroll.js';

document.addEventListener('DOMContentLoaded', () => {
    initLoader(() => {
        // Callback function to run after loader is finished
        initScrollAnimations();
    });
    initNavbar();
    initAnimations();
});