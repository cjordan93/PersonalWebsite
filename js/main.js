$(document).ready(function() {
  
  $('.menu-trigger').click(function() {
    $('.navigation').slideToggle(400, function() {
      $(this).toggleClass('navigation-expanded').css('display', '');
    });
    $('.fa-bars').toggle();
    $('.fa-times').toggle();
  });
  
});