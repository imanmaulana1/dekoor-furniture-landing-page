function getClass(element, className) {
  return element.classList.add(className);
}

function removeClass(element, className) {
  return element.classList.remove(className);
}

function handleHamburgerMenu() {
  const navbar = document.querySelector('.navbar');

  if (!navbar.classList.contains('show')) {
    return getClass(navbar, 'show');
  }

  removeClass(navbar, 'show');
}

function flipModalInput() {
  const formWrapper = document.querySelector('.form-wrapper');

  if (!formWrapper.classList.contains('rotate')) {
    return getClass(formWrapper, 'rotate'), resetMyForm(formRegister);
  }

  removeClass(formWrapper, 'rotate');
  resetMyForm(formLogin);
}

function handleModalInput() {
  const overlayForm = document.getElementById('form-register');

  if (!overlayForm.classList.contains('show')) {
    return getClass(overlayForm, 'show');
  }

  removeClass(overlayForm, 'show');
}

function showToastNotification() {
  const toastBox = document.getElementById('toast-wrapper');

  getClass(toastBox, 'show');
  handleHamburgerMenu();

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

function showVideo() {
  const videoWrapper = document.getElementById('video-wrapper');

  if (!videoWrapper.classList.contains('show')) {
    return getClass(videoWrapper, 'show');
  }

  removeClass(videoWrapper, 'show');
  stopVideo();
}

function stopVideo() {
  const videoPlayer = document.getElementById('video');
  videoPlayer.pause();
  videoPlayer.currentTime = 0;
}

function resetMyForm(form) {
  form.reset();
}

const formRegister = document.querySelector('.front'),
  formLogin = document.querySelector('.back');

const btnHamburger = document.getElementById('btn-hamburger');
btnHamburger.addEventListener('click', handleHamburgerMenu);

const navClose = document.querySelector('.nav__close');
navClose.addEventListener('click', handleHamburgerMenu);

const navLinks = document.querySelectorAll('.nav__item');
navLinks.forEach((navLink) => {
  navLink.addEventListener('click', handleHamburgerMenu);
});

const btnSignups = document.querySelectorAll('.btn__sign');
btnSignups.forEach((btnSignup) => {
  btnSignup.addEventListener('click', handleModalInput);
});

const btnCloseForms = document.querySelectorAll('.btn__close');
btnCloseForms.forEach((btnCloseForm, index) => {
  btnCloseForm.addEventListener('click', () => {
    handleModalInput();

    index == 1 ? flipModalInput() : '';

    resetMyForm(formLogin);
    resetMyForm(formRegister);
  });
});

const login = document.getElementById('login');
login.addEventListener('click', flipModalInput);

const register = document.getElementById('register');
register.addEventListener('click', flipModalInput);

const btnCarts = document.querySelectorAll('.btn__cart');
btnCarts.forEach((btnCart) => {
  btnCart.addEventListener('click', showToastNotification);
});

const btnVideo = document.querySelector('.btn__video');
btnVideo.addEventListener('click', showVideo);

const btnCloseVideo = document.querySelector('.btn__close__video');
btnCloseVideo.addEventListener('click', showVideo);
