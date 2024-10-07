$(function(){
  $('.slider').slick({
    arrows: false,
    fade: true,
    autoplay: 3000,
    dots: true
  });
});


function t01() {
  let menu = document.querySelector('.header__menu');
  let burger = document.querySelector('.burger');
  let slider = document.querySelector('.slick-dots');
  menu.classList.toggle('header__menu-open');
  burger.classList.toggle('burger__open');

  let currentZIndex = window.getComputedStyle(slider).zIndex;

  if (currentZIndex === '6') {
    slider.style.zIndex = '0';
  } else {
    slider.style.zIndex = '6';
  }
}

document.querySelector('.burger').addEventListener('click', t01);