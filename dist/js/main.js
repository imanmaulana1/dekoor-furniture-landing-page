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
    return getClass(formWrapper, 'rotate'), resetMyForm(registerForm);
  }

  removeClass(formWrapper, 'rotate');
  resetMyForm(loginForm);
}

function handleModalInput() {
  const overlayForm = document.getElementById('form-register');

  if (!overlayForm.classList.contains('show')) {
    return getClass(overlayForm, 'show');
  }

  removeClass(overlayForm, 'show');
}

function handleModalSearchCatalog() {
  const catalogWrapper = document.getElementById('search-catalog-wrapper');

  if (!catalogWrapper.classList.contains('show')) {
    return getClass(catalogWrapper, 'show');
  }

  removeClass(catalogWrapper, 'show');
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

function getImageCategories() {
  const imageCategories = document.querySelectorAll('.category__img');

  return imageCategories;
}

function getAccordionItems() {
  const accordionItems = document.querySelectorAll('.accordion__item');

  return accordionItems;
}

function getSlides() {
  return document.querySelectorAll('.products__item');
}

function moveToNextSlide() {
  const slides = getSlides();

  if (index >= slides.length - 1) return;

  index++;

  slideContainer.style.transform = `translateX(-${slideWidth * index}px)`;
  slideContainer.style.transition = `.7s`;

  slides[index].classList.add('active');

  slides.forEach((slide, idx) => {
    if (idx !== index) slide.classList.remove('active');
  });
}

function moveToPrevSlide() {
  if (index <= 0) return;

  index--;

  slideContainer.style.transform = `translateX(${-slideWidth * index}px)`;
  slideContainer.style.transition = `.7s`;

  const slides = getSlides();

  slides[index].classList.add('active');

  slides.forEach((slide, idx) => {
    if (idx !== index) slide.classList.remove('active');
  });
}

const registerForm = document.querySelector('.front'),
  loginForm = document.querySelector('.back'),
  searchCatalogForm = document.getElementById('search-catalog');

const hamburgerBtn = document.getElementById('btn-hamburger');
hamburgerBtn.addEventListener('click', handleHamburgerMenu);

const navClose = document.querySelector('.nav__close');
navClose.addEventListener('click', handleHamburgerMenu);

const navLinks = document.querySelectorAll('.nav__item');
navLinks.forEach((navLink) => {
  navLink.addEventListener('click', handleHamburgerMenu);
});

const signupBtns = document.querySelectorAll('.btn__sign');
signupBtns.forEach((signupBtn) => {
  signupBtn.addEventListener('click', handleModalInput);
});

const closeFormBtns = document.querySelectorAll('.btn__close');
closeFormBtns.forEach((closeFormBtn, index) => {
  closeFormBtn.addEventListener('click', () => {
    handleModalInput();

    index == 1 ? flipModalInput() : '';

    resetMyForm(loginForm);
    resetMyForm(registerForm);
  });
});

const login = document.getElementById('login');
login.addEventListener('click', flipModalInput);

const register = document.getElementById('register');
register.addEventListener('click', flipModalInput);

const cartBtns = document.querySelectorAll('.btn__cart');
cartBtns.forEach((cartBtn) => {
  cartBtn.addEventListener('click', showToastNotification);
});

const videoBtn = document.querySelector('.btn__video');
videoBtn.addEventListener('click', showVideo);

const closeVideoBtn = document.getElementById('btn-close-video');
closeVideoBtn.addEventListener('click', showVideo);

const searchCatalogBtn = document.querySelector('.btn__catalog');
searchCatalogBtn.addEventListener('click', handleModalSearchCatalog);

const closeSearchCatalogBtn = document.getElementById('btn-close-catalog');
closeSearchCatalogBtn.addEventListener('click', () => {
  handleModalSearchCatalog();
  resetMyForm(searchCatalogForm);
});

const imageCategories = getImageCategories();
imageCategories.forEach((imageCategorySelected) => {
  imageCategorySelected.addEventListener('click', () => {
    const images = getImageCategories();
    images.forEach((image) => {
      removeClass(image, 'active');
    });

    getClass(imageCategorySelected, 'active');
  });
});

const accordions = getAccordionItems();
accordions.forEach((accordionSelected) => {
  accordionSelected.addEventListener('click', () => {
    const accordionItems = getAccordionItems();
    accordionItems.forEach((accordion) => {
      const accordionDesc = accordion.querySelector('.accordion__desc');
      accordionDesc.style.maxHeight = null;

      removeClass(accordion, 'active');
    });

    getClass(accordionSelected, 'active');

    const accordionDesc = accordionSelected.querySelector('.accordion__desc');
    accordionDesc.style.maxHeight = `${accordionDesc.scrollHeight}px`;
  });
});

let index = 2;

const slideContainer = document.querySelector('.products__item__wrapper');
const slides = getSlides();
const slideWidth = slides[0].clientWidth;

const prevBtn = document.getElementById('btn-prev');
prevBtn.addEventListener('click', moveToPrevSlide);

const nextBtn = document.getElementById('btn-next');
nextBtn.addEventListener('click', moveToNextSlide);
