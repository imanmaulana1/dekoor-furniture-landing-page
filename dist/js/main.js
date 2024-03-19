function getClass(element, className) {
  return element.classList.add(className);
}

function removeClass(element, className) {
  return element.classList.remove(className);
}

function showHamburgerMenu() {
  getClass(navbar, 'show');
}

function closeHamburgerMenu() {
  removeClass(navbar, 'show');
}

function flipModalInput() {
  getClass(formWrapper, 'rotate');
  resetMyForm(formRegister);
}

function unFlipModalInput() {
  removeClass(formWrapper, 'rotate');
  resetMyForm(formLogin);
}

function showModalInput() {
  getClass(overlayForm, 'show');
}

function closeModalInput() {
  removeClass(overlayForm, 'show');
}

function showToast() {
  getClass(toastBox, 'show');
  closeHamburgerMenu();

  let toast = document.createElement('div');
  toast.classList.add('toast');
  toast.innerHTML =
    '<i class="fa-solid fa-circle-exclamation"></i> To access this feature, you need to log in to your account first.';

  toastBox.appendChild(toast);

  setTimeout(() => {
    toast.remove();
    removeClass(toastBox, 'show');
  }, 5000);
}

function resetMyForm(form) {
  form.reset();
}

const navbar = document.querySelector('.navbar'),
  formWrapper = document.querySelector('.form-wrapper'),
  overlayForm = document.getElementById('form-register'),
  toastBox = document.getElementById('toast-wrapper'),
  formRegister = document.querySelector('.front'),
  formLogin = document.querySelector('.back');

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
btnCloseForm.forEach((item, index) => {
  item.addEventListener('click', () => {
    closeModalInput();

    index == 0 ? resetMyForm(formRegister) : resetMyForm(formLogin);
  });
});

const login = document.getElementById('login');
login.addEventListener('click', flipModalInput);

const register = document.getElementById('register');
register.addEventListener('click', unFlipModalInput);

const btnCart = document.querySelectorAll('.btn__cart');
btnCart.forEach((item) => {
  item.addEventListener('click', () => {
    showToast();
  });
});
