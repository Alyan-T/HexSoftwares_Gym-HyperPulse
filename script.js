const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    const icon = burger.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-xmark');
});

window.onscroll = () => {
    const navbar = document.querySelector('.navbar');
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        navbar.style.background = "#000";
        navbar.style.padding = "10px 10%";
    } else {
        navbar.style.background = "rgba(0,0,0,0.8)";
        navbar.style.padding = "20px 10%";
    }
};