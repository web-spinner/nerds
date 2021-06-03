$(document).ready(function(){
  let filterBtn = $('#filter-btn');
  let filterBox = $('#filter-box');

  filterBtn.click(function(event){
    filterBox.slideToggle();
    filterBtn.toggleClass('filter__toggle-btn--opened');
  });
});
