export function initLoader(onComplete) {
    const loader = document.querySelector('.loader');
    if (!loader) return;

    const loaderNumber = document.getElementById('loader-number');
    const mainContent = document.querySelector('.main-content');
    let count = 0;

    const updateLoader = () => {
        if (count <= 100) {
            loaderNumber.textContent = count;
            count++;
            const delay = count > 80 ? 50 : 25;
            setTimeout(updateLoader, delay);
        } else {
            gsap.to(loader, {
                opacity: 0,
                duration: 0.8,
                onComplete: () => {
                    loader.style.display = 'none';
                    document.body.style.overflowY = 'auto';
                    gsap.to(mainContent, { opacity: 1, duration: 1 });
                    if (onComplete) onComplete();
                }
            });
        }
    };
    updateLoader();
}