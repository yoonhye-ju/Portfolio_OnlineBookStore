$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "2022 공무원", size: 50 },
  headers: { Authorization: "KakaoAK c520cb5172aeec952fa88823508d155b" }
})
  .done(function (msg) {
    var picboxs = document.getElementsByClassName('picBox');

    for (var i = 0; i < picboxs.length; i++) {
      $(".picBox").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
      $(".picBox").eq(i).append("<span>" + msg.documents[i].publisher + "</span>");

      var str5 = msg.documents[i].title;
      var str6 = str5.substring(0, 20);

      $(".picBox").eq(i).append("<h4>" + str6 + "</h4>");

      $(".picBox").eq(i).append("<p>" + msg.documents[i].authors + "</p>");
    }
  });