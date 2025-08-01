document.addEventListener('DOMContentLoaded', () => {

    // --- Custom Cursor Logic ---
    const cursor = document.querySelector('.cursor');
    const links = document.querySelectorAll('a');

    document.addEventListener('mousemove', e => {
        cursor.setAttribute("style", "top: " + (e.pageY) + "px; left: " + (e.pageX) + "px;")
    });
    
    links.forEach(link => {
        link.addEventListener('mouseover', () => {
            cursor.classList.add('hover-grow');
        });
        link.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover-grow');
        });
    });

    // --- Fade-in on Scroll Logic ---
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });

});