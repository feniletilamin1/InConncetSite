// Новостные карточки

let newsCards = document.querySelectorAll('.news-card');

for (let index = 0; index < newsCards.length; index++) {
  newsCards[index].classList.add('news-card--margin-top-140');
  index++;
  newsCards[index].classList.add('news-card--margin-top-100');
  index++;
  newsCards[index].classList.add('news-card--margin-top-50');
  index++;
}

// Бегущие строки

$('.marquee-right').marquee({
  duration: 10000,
  startVisible: true,
  duplicated: true,
  direction: 'right',
});

$('.marquee-left').marquee({
  duration: 10000,
  startVisible: true,
  duplicated: true,
  direction: 'left',
});

$('.marquee-footer-right').marquee({
  duration: 15000,
  startVisible: true,
  duplicated: true,
  direction: 'right',
});

// Буррег меню 

$('#burger-menu').click(function () {
  $('.header__menu').addClass('header__menu--active');
  $('.black-bg').addClass('black-bg--active');
  $('body').addClass('fixed-body ');
});

$('.black-bg').click(function () {
  $('.header__menu').removeClass('header__menu--active');
  $('.black-bg').removeClass('black-bg--active');
  $('body').removeClass('fixed-body ');
});

$('#menu-cross').click(function () {
  $('.header__menu').removeClass('header__menu--active');
  $('.black-bg').removeClass('black-bg--active');
  $('body').removeClass('fixed-body ');
});

