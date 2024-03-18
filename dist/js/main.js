const navbar = document.querySelector('.navbar');

const btnHamburger = document.getElementById('btn-hamburger');
btnHamburger.addEventListener('click', showMenuMobile);

const navClose = document.querySelector('.nav__close');
navClose.addEventListener('click', closeMenuMobile);

const navItems = document.querySelectorAll('.nav__item');
navItems.forEach((item) => {
  item.addEventListener('click', closeMenuMobile);
});

const btnSignup = document.querySelectorAll('.btn__sign');
btnSignup.forEach((item) => {
  item.addEventListener('click', () => {
    closeMenuMobile();
    showModalForm();
  });
});

const overlayForm = document.getElementById('form-register');

const formClose = document.querySelector('.btn__close');
formClose.addEventListener('click', closeModalForm);

function showModalForm() {
  overlayForm.classList.add('show');
}

function closeModalForm() {
  overlayForm.classList.remove('show');
}

function showMenuMobile() {
  navbar.classList.add('show');
}

function closeMenuMobile() {
  navbar.classList.remove('show');
}
