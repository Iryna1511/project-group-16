let mobilemenuopenbtn = document.querySelector('.header-mobile-menu-open-btn');
let mobailform = document.querySelector('.mobile-menu-wrapper');
let mobileclosebtn = document.querySelector('.mobile-menu-close-btn');

mobilemenuopenbtn.addEventListener('click', () => {
    mobailform.classList.add('is-open'); // Use 'is-open' here
});

mobileclosebtn.addEventListener('click', (e) => {
    mobailform.classList.remove('is-open');
});