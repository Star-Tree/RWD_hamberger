// function addclass () {
//      e.preventDefault();
//      document.body.setAttribute('class' , 'showMenu');
// }

// let el_hambergerMenu = document.querySelector('.header-hambergerMenu');
// el_hambergerMenu.addEventListener('click', addclass(), false);

$(document).ready(function() {
  $('.header-hambergerMenu').on('click',  function(e){  // 行動版的選單按鈕
     e.preventDefault();
     $('body').toggleClass('showMenu'); // 按下後
 });
});