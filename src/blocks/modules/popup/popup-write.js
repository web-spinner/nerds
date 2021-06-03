$(document).ready(function(){
  let popupWrite = $('#write-popup');
  let btnOpen = $('#write-open-btn');
  let btnClose = $('#write-close-btn');

  btnOpen.click(function(){
    popupWrite.show();
  });

  btnClose.click(function(){
    popupWrite.hide();
  });
});
