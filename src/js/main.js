const mobileMenuOpenbtn = document.querySelector(
  '.header-mobile-menu-open-btn'
);
const mobileForm = document.querySelector('.mobile-menu-wrapper');
const mobileMenuClosebtn = document.querySelector('.mobile-menu-close-btn');

mobileMenuOpenbtn.addEventListener('click', e => {
  mobileForm.classList.add('is-open');
});

mobileMenuClosebtn.addEventListener('click', e => {
  mobileForm.classList.remove('is-open');
});
