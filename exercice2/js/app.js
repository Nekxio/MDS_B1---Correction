const backToTopButton = document.getElementById('backToTop');
const images = document.querySelectorAll('img');

function backToTop() {
    window.scrollTo(0, 0);
    backToTopButton.style.backgroundColor = 'red';
}


function switchTheme() {
    const body = document.querySelector('body');
    body.classList.toggle('dark');
    images.forEach(image => {
        const src = image.src;
        if (body.classList.contains('dark')) {
            image.src = src.replace('light', 'dark');
        } else {
            image.src = src.replace('dark', 'light');
        }
    });
}
