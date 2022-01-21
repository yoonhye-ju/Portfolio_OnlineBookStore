$(document).ready(function () {
  $('.bannerMenu li:nth-child(1)').mouseover(function () {
    $('.SAT').show();
  });
  $('.bannerMenu li:nth-child(1)').mouseout(function () {
    $('.SAT').hide();
  });
  $('.bannerMenu li:nth-child(2)').mouseover(function () {
    $('.hint').show();
  });
  $('.bannerMenu li:nth-child(2)').mouseout(function () {
    $('.hint').hide();
  });
  $('.bannerMenu li:nth-child(3)').mouseover(function () {
    $('.language').show();
  });
  $('.bannerMenu li:nth-child(3)').mouseout(function () {
    $('.language').hide();
  });
  $('.bannerMenu li:nth-child(4)').mouseover(function () {
    $('.university').show();
  });
  $('.bannerMenu li:nth-child(4)').mouseout(function () {
    $('.university').hide();
  });
  $('.bannerMenu li:nth-child(5)').mouseover(function () {
    $('.essay').show();
  });
  $('.bannerMenu li:nth-child(5)').mouseout(function () {
    $('.essay').hide();
  });
  $('.bannerMenu li:nth-child(6)').mouseover(function () {
    $('.self').show();
  });
  $('.bannerMenu li:nth-child(6)').mouseout(function () {
    $('.self').hide();
  });
  $('.bannerMenu li:nth-child(7)').mouseover(function () {
    $('.moon').show();
  });
  $('.bannerMenu li:nth-child(7)').mouseout(function () {
    $('.moon').hide();
  });
});

$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "수험서", size: 50 },
  headers: { Authorization: "KakaoAK c520cb5172aeec952fa88823508d155b" }
})
  .done(function (msg) {
    var picboxs = document.getElementsByClassName('SATbox');

    for (var i = 0; i < picboxs.length; i++) {
      $(".SATbox").eq(i).append("<p>" + msg.documents[i].authors + "</p>");
      $(".SATbox").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");

      var str3 = msg.documents[i].title;
      var str4 = str3.substring(0, 15);

      $(".SATbox").eq(i).append("<h4>" + str4 + "</h4>");
    }
  });

$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "참고서", size: 50 },
  headers: { Authorization: "KakaoAK c520cb5172aeec952fa88823508d155b" }
})
  .done(function (msg) {
    var picboxs = document.getElementsByClassName('hintBox');

    for (var i = 0; i < picboxs.length; i++) {
      $(".hintBox").eq(i).append("<p>" + msg.documents[i].authors + "</p>");
      $(".hintBox").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");

      var str3 = msg.documents[i].title;
      var str4 = str3.substring(0, 15);

      $(".hintBox").eq(i).append("<h4>" + str4 + "</h4>");
    }
  });

$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "외국어", size: 50 },
  headers: { Authorization: "KakaoAK c520cb5172aeec952fa88823508d155b" }
})
  .done(function (msg) {
    var picboxs = document.getElementsByClassName('languageBox');

    for (var i = 0; i < picboxs.length; i++) {
      $(".languageBox").eq(i).append("<p>" + msg.documents[i].authors + "</p>");
      $(".languageBox").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");

      var str3 = msg.documents[i].title;
      var str4 = str3.substring(0, 15);

      $(".languageBox").eq(i).append("<h4>" + str4 + "</h4>");
    }
  });

$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "대학", size: 50 },
  headers: { Authorization: "KakaoAK c520cb5172aeec952fa88823508d155b" }
})
  .done(function (msg) {
    var picboxs = document.getElementsByClassName('universityBox');

    for (var i = 0; i < picboxs.length; i++) {
      $(".universityBox").eq(i).append("<p>" + msg.documents[i].authors + "</p>");
      $(".universityBox").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");

      var str3 = msg.documents[i].title;
      var str4 = str3.substring(0, 15);

      $(".universityBox").eq(i).append("<h4>" + str4 + "</h4>");
    }
  });

$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "에세이", size: 50 },
  headers: { Authorization: "KakaoAK c520cb5172aeec952fa88823508d155b" }
})
  .done(function (msg) {
    var picboxs = document.getElementsByClassName('essayBox');

    for (var i = 0; i < picboxs.length; i++) {
      $(".essayBox").eq(i).append("<p>" + msg.documents[i].authors + "</p>");
      $(".essayBox").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");

      var str3 = msg.documents[i].title;
      var str4 = str3.substring(0, 15);

      $(".essayBox").eq(i).append("<h4>" + str4 + "</h4>");
    }
  });

$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "자기계발", size: 50 },
  headers: { Authorization: "KakaoAK c520cb5172aeec952fa88823508d155b" }
})
  .done(function (msg) {
    var picboxs = document.getElementsByClassName('selfBox');

    for (var i = 0; i < picboxs.length; i++) {
      $(".selfBox").eq(i).append("<p>" + msg.documents[i].authors + "</p>");
      $(".selfBox").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");

      var str3 = msg.documents[i].title;
      var str4 = str3.substring(0, 15);

      $(".selfBox").eq(i).append("<h4>" + str4 + "</h4>");
    }
  });

$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "문구", size: 50 },
  headers: { Authorization: "KakaoAK c520cb5172aeec952fa88823508d155b" }
})
  .done(function (msg) {
    var picboxs = document.getElementsByClassName('moonBox');

    for (var i = 0; i < picboxs.length; i++) {
      $(".moonBox").eq(i).append("<p>" + msg.documents[i].authors + "</p>");
      $(".moonBox").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");

      var str3 = msg.documents[i].title;
      var str4 = str3.substring(0, 15);

      $(".moonBox").eq(i).append("<h4>" + str4 + "</h4>");
    }
  });