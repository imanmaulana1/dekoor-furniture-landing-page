const navbar = document.querySelector('.navbar');

const btnHamburger = document.getElementById('btn-hamburger');
btnHamburger.addEventListener('click', showMenuMobile());

const btnClose = document.querySelector('.nav__close');
btnClose.addEventListener('click', closeMenuMobile());

const navItems = document.querySelectorAll('.nav__item');
navItems.forEach((item) => {
  item.addEventListener('click', closeMenuMobile());
});

function showMenuMobile() {
  return () => {
    navbar.classList.add('show');
  };
}

function closeMenuMobile() {
  return () => {
    navbar.classList.remove('show');
  };
}
