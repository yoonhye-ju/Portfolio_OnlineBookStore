$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "모의고사", size: 50 },
  headers: { Authorization: "KakaoAK c520cb5172aeec952fa88823508d155b" }
})
  .done(function (msg) {
    var picboxs = document.getElementsByClassName('todayBox');

    for (var i = 0; i < picboxs.length; i++) {
      $(".todayBox").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
      $(".todayBox").eq(i).append("<span>" + msg.documents[i].publisher + "</span>");

      var str7 = msg.documents[i].title;
      var str8 = str7.substring(0, 20);

      $(".todayBox").eq(i).append("<h4>" + str8 + "</h4>");

      $(".todayBox").eq(i).append("<p>" + msg.documents[i].authors + "</p>");
    }
  });