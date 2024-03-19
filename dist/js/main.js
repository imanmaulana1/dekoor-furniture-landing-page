function getClass(element, className) {
  return element.classList.add(className);
}

function removeClass(element, className) {
  return element.classList.remove(className);
}

function showHamburgerMenu() {
  const navbar = document.querySelector('.navbar');
  getClass(navbar, 'show');
}

function closeHamburgerMenu() {
  const navbar = document.querySelector('.navbar');
  removeClass(navbar, 'show');
}

function flipModalInput() {
  const formWrapper = document.querySelector('.form-wrapper');
  getClass(formWrapper, 'rotate');
}

function unFlipModalInput() {
  const formWrapper = document.querySelector('.form-wrapper');
  removeClass(formWrapper, 'rotate');
}

function showModalInput() {
  const overlayForm = document.getElementById('form-register');
  getClass(overlayForm, 'show');
}

function closeModalInput() {
  const overlayForm = document.getElementById('form-register');
  removeClass(overlayForm, 'show');
}

const btnHamburger = document.getElementById('btn-hamburger');
btnHamburger.addEventListener('click', showHamburgerMenu);

const navClose = document.querySelector('.nav__close');
navClose.addEventListener('click', closeHamburgerMenu);

const navItems = document.querySelectorAll('.nav__item');
navItems.forEach((item) => {
  item.addEventListener('click', closeHamburgerMenu);
});

const btnSignup = document.querySelectorAll('.btn__sign');
btnSignup.forEach((item) => {
  item.addEventListener('click', () => {
    closeHamburgerMenu();
    showModalInput();
  });
});

const btnCloseForm = document.querySelectorAll('.btn__close');
btnCloseForm.forEach((item) => {
  item.addEventListener('click', closeModalInput);
});

const login = document.getElementById('login');
login.addEventListener('click', flipModalInput);

const register = document.getElementById('register');
register.addEventListener('click', unFlipModalInput);
