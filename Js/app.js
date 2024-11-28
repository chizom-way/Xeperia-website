const btn = document.getElementById('hamburger-menu');
const menu = document.getElementById('menu');


btn.addEventListener('click', navToggle);

function navToggle() {
    btn.classList.toggle('open');  
    menu.classList.toggle('flex');
    menu.classList.toggle('hidden');
}


document.addEventListener('DOMContentLoaded', () => {
    const footerYear = document.querySelector('.footer-year');
    if (footerYear) footerYear.textContent = new Date().getFullYear();
});