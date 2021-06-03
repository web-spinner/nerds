$(document).ready(function(){
  let menuBtn = $('#menu-button');
  let menuNav = $('#menu-nav');

  menuBtn.click(function(event){
    menuNav.slideToggle();
    menuBtn.toggleClass('button-menu--opened');
  });
});
