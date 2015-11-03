$(document).ready(function() {
  
  $('.menu-trigger').click(function() {
    $('.navigation').slideToggle(400, function() {
      $(this).toggleClass('navigation-expanded').css('display', '');
    });
    $('.fa-bars').toggle();
    $('.fa-times').toggle();
  });

  /* Resume Navigation - on click, show the content with the same index and hide the siblings. Change the opacity   of the selected navigation to 1 and set the siblings to 0.5. */
  $('.resume-content .content').hide();

  $('.resume-nav li').on('click',function(e) {
    e.preventDefault();
    var resumeContent = $(this).index();
    $('.content').eq(resumeContent).fadeToggle(600).show().siblings().hide();
    $(this).css('opacity', 1).siblings().css('opacity', .5);
  });
  
});