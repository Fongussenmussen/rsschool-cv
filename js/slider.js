const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  speed: 800,
  centeredSlides: true,
  centeredSlidesBounds: true,
  simulateTouch: false,
  keyboard: {
    enabled: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
// Navigation
const aboutMe = document.querySelector('#about-me');
const codeExample = document.querySelector('#code-example');
const languages = document.querySelector('#languages');

aboutMe.onclick = function () {
  swiper.slideTo(1);
}
codeExample.onclick = function () {
  swiper.slideTo(2);
}
languages.onclick = function () {
  swiper.slideTo(3);
}