const btnMobile  = document.getElementById('mobile-menu');

function toggleMenu () {
    const nav  = document.querySelector('#nav');
    nav.classList.toggle('active')
}

btnMobile.addEventListener('click',toggleMenu);