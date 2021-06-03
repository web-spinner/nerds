import slick from 'slick-carousel';

$(document).ready(function(){
  $('.carousel').slick({
    arrows: false,
    dots: true,
    dotsClass: 'carousel__dots',
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });
});
