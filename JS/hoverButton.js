$(document).ready(function () {
  $(".menuBox_btn01 p").addClass("select");
  $(".menuBox_btn01 p").mouseover(function () {
    $(".box p").removeClass("select");
    $(this).addClass("select");
    $("#bannerBox01").show();
    $("#bannerBox02").hide();
    $("#bannerBox03").hide();
    $("#bannerBox04").hide();
    $("#bannerBox05").hide();
  });
  $(".menuBox_btn02 p").mouseover(function () {
    $(".box p").removeClass("select");
    $(this).addClass("select");
    $("#bannerBox02").show();
    $("#bannerBox01").hide();
    $("#bannerBox03").hide();
    $("#bannerBox04").hide();
    $("#bannerBox05").hide();
  });
  $(".menuBox_btn03 p").mouseover(function () {
    $(".box p").removeClass("select");
    $(this).addClass("select");
    $("#bannerBox03").show();
    $("#bannerBox01").hide();
    $("#bannerBox02").hide();
    $("#bannerBox04").hide();
    $("#bannerBox05").hide();
  });
  $(".menuBox_btn04 p").mouseover(function () {
    $(".box p").removeClass("select");
    $(this).addClass("select");
    $("#bannerBox04").show();
    $("#bannerBox01").hide();
    $("#bannerBox02").hide();
    $("#bannerBox03").hide();
    $("#bannerBox05").hide();
  });
  $(".menuBox_btn05 p").mouseover(function () {
    $(".box p").removeClass("select");
    $(this).addClass("select");
    $("#bannerBox05").show();
    $("#bannerBox01").hide();
    $("#bannerBox02").hide();
    $("#bannerBox03").hide();
    $("#bannerBox04").hide();
  });
  
  $(".btn1").addClass("choice");
  $(".btn1").click(function () {
    $(".btn").removeClass("choice");
    $(this).addClass("choice");
    $(".bestRight").show();
    $(".bestRight2").hide();
    $(".bestRight3").hide();
    $(".bestRight4").hide();
    $(".bestRight5").hide();
    $(".bestRight6").hide();
    $(".bestRight7").hide();
  });
  $(".btn2").click(function () {
    $(".btn").removeClass("choice");
    $(this).addClass("choice");
    $(".bestRight2").css("display", "flex");
    $(".bestRight").hide();
    $(".bestRight3").hide();
    $(".bestRight4").hide();
    $(".bestRight5").hide();
    $(".bestRight6").hide();
    $(".bestRight7").hide();
  });
  $(".btn3").click(function () {
    $(".btn").removeClass("choice");
    $(this).addClass("choice");
    $(".bestRight3").css("display", "flex");
    $(".bestRight").hide();
    $(".bestRight2").hide();
    $(".bestRight4").hide();
    $(".bestRight5").hide();
    $(".bestRight6").hide();
    $(".bestRight7").hide();
  });
  $(".btn4").click(function () {
    $(".btn").removeClass("choice");
    $(this).addClass("choice");
    $(".bestRight4").css("display", "flex");
    $(".bestRight").hide();
    $(".bestRight2").hide();
    $(".bestRight3").hide();
    $(".bestRight5").hide();
    $(".bestRight6").hide();
    $(".bestRight7").hide();
  });
  $(".btn5").click(function () {
    $(".btn").removeClass("choice");
    $(this).addClass("choice");
    $(".bestRight5").css("display", "flex");
    $(".bestRight").hide();
    $(".bestRight2").hide();
    $(".bestRight3").hide();
    $(".bestRight4").hide();
    $(".bestRight6").hide();
    $(".bestRight7").hide();
  });
  $(".btn6").click(function () {
    $(".btn").removeClass("choice");
    $(this).addClass("choice");
    $(".bestRight6").css("display", "flex");
    $(".bestRight").hide();
    $(".bestRight2").hide();
    $(".bestRight3").hide();
    $(".bestRight4").hide();
    $(".bestRight5").hide();
    $(".bestRight7").hide();
  });
  $(".btn7").click(function () {
    $(".btn").removeClass("choice");
    $(this).addClass("choice");
    $(".bestRight7").css("display", "flex");
    $(".bestRight").hide();
    $(".bestRight2").hide();
    $(".bestRight3").hide();
    $(".bestRight4").hide();
    $(".bestRight5").hide();
    $(".bestRight6").hide();
  });
});

