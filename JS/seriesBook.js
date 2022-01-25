$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "2022 국어왕국" , sort: "latest", size: 10},
  headers: { Authorization: "KakaoAK c520cb5172aeec952fa88823508d155b" }
})
  .done(function (msg) {
    var seriesBooks = document.getElementsByClassName('seriesBook');

    for (var i = 0; i < seriesBooks.length; i++) {
      $(".seriesBook").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
      $(".seriesBook").eq(i).append("<span>" + msg.documents[i].publisher + "</span>");

      var str7 = msg.documents[i].title;
      var str8 = str7.substring(0, 20);

      $(".seriesBook").eq(i).append("<h4>" + str8 + "</h4>");

      $(".seriesBook").eq(i).append("<p>" + msg.documents[i].price + "</p>");
    }
  });