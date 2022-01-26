$(window).scroll(function(){

  currentScrollTop = $(window).scrollTop();
  if (currentScrollTop > 8800) {
    $(".review").addClass("bg");
    $(".introduce").removeClass("bg");
  } else {
    $(".introduce").addClass("bg");
    $(".review").removeClass("bg");
  }
});
 
