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

const btnCloseForm = document.querySelectorAll('.btn__close');
btnCloseForm.forEach((item) => {
  item.addEventListener('click', closeModalForm);
});

const login = document.getElementById('login');
login.addEventListener('click', () => {
  const formWrapper = document.querySelector('.form-wrapper');
  formWrapper.classList.add('rotate');
});

const register = document.getElementById('register');
register.addEventListener('click', () => {
  const formWrapper = document.querySelector('.form-wrapper');
  formWrapper.classList.remove('rotate');
});

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
