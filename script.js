let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navContainer .navSection .navLinks');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active'); 
} 
