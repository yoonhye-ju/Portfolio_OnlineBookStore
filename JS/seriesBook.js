$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "2022 국어국왕", sort: "latest", size: "10"},
  headers: { Authorization: "KakaoAK c520cb5172aeec952fa88823508d155b" }
})
  .done(function (msg) {
    console.log(msg);
    console.log(msg.documents[0].thumbnail);
    var seriesBooks = document.querySelectorAll('.seriesBook');

    for (var i = 0; i < seriesBooks.length; i++) {
      $(".toic").eq(i).children(".seriesBook").prepend("<h4>" + msg.documents[i].price + "원"+"</h4>");
      
      var str7 = msg.documents[i].title;
      var str8 = str7.substring(0, 30);

      $(".toic").eq(i).children(".seriesBook").prepend("<p>" + str8 + "</p>");

      $(".toic").eq(i).children(".seriesBook").prepend('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");

      
    }
  });