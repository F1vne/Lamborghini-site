const menuBtn = document.querySelector('.menu-btn');
const menuMobile = document.querySelector('.menu-mobile');

menuBtn.addEventListener('click', () => {
    menuMobile.classList.toggle('menu--open');
});

const swiper = new Swiper('.swiper', {
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-right',
        prevEl: '.swiper-button-left',
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        }
    }

});
