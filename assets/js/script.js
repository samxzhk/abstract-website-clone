//data-nav-movile

const nav_mobile = document.querySelector('[data-nav-mobile]');
const toggle_icon = document.querySelector('[data-toggle]');


toggle_icon.addEventListener('click', () =>
{ 
   nav_mobile.classList.toggle("translate-y-[-200%]");
   nav_mobile.classList.toggle('translate-y-[0px]');
})