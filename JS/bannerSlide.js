$(function () {
  let w = window.innerWidth;
  function bannerSlide() {
    $('.slide').stop().animate({ marginLeft: -w }, function () {
      $('.slide li:first').appendTo('.slide');
      $('.slide').css({ marginLeft: 0 });
    });
  }
  setInterval(bannerSlide, 3000);
});
