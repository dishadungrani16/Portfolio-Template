export function initAnimations() {
    initTextScramble();
    initRippleEffect();
}

function initTextScramble() {
    const headlines = document.querySelectorAll('.headline');
    if (headlines.length === 0) return;

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ*#@!';
    const scrambleText = (element) => {
        const originalText = element.dataset.value;
        let iteration = 0;
        const interval = setInterval(() => {
            element.innerText = originalText.split('').map((letter, index) => {
                if (index < iteration) return originalText[index];
                return chars[Math.floor(Math.random() * chars.length)];
            }).join('');
            if (iteration >= originalText.length) clearInterval(interval);
            iteration += 1 / 3;
        }, 30);
    };

    headlines.forEach(headline => {
        headline.addEventListener('mouseover', () => scrambleText(headline));
        scrambleText(headline);
    });
}

function initRippleEffect() {
    const canvas = document.getElementById('ripple-canvas');
    if (!canvas || typeof THREE === 'undefined') return;

    // ... (All the Three.js code from the previous script.js file) ...
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(window.innerWidth / -2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / -2, 1, 1000);
    camera.position.z = 1;
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    // ... rest of the ripple effect code
}