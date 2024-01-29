const menubtn = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.hamburger-menu .nav-list');

menubtn.addEventListener('click',function(){
    menubtn.classList.toggle('show');
    menu.classList.toggle('show');
})