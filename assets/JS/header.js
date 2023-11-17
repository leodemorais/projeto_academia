const menuBtn = document.querySelector('.menuBTN');
const menu = document.querySelector('.menuLinks');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
});