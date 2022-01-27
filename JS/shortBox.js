$(function(){
  $('.buttonOpen').click(function(){
    $('.bookDetailBox').show();
    $('#bookDetail').css({height: "9955px"})
    $('.bookDetailBox').scrollTop(2300);
    $('.shortBook').hide();
  });
  $('.buttonClose').click(function(){
    $('.bookDetailBox').hide();
    $('#bookDetail').css({height: "3800px"})
    $('.shortBox').scrollTop(2000);
    $('.shortBook').show();
  });
});