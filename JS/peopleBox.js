$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "교양 사람", sort: "latest", size: 50 },
  headers: { Authorization: "KakaoAK c520cb5172aeec952fa88823508d155b" }
})
  .done(function (msg) {
    var picboxs = document.getElementsByClassName('peopleBox');

    for (var i = 0; i < picboxs.length; i++) {
      $(".peopleBox").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
      $(".peopleBox").eq(i).append("<span>" + msg.documents[i].publisher + "</span>");

      var str3 = msg.documents[i].title;
      var str4 = str3.substring(0, 20);

      $(".peopleBox").eq(i).append("<h4>" + str4 + "</h4>");

      $(".peopleBox").eq(i).append("<p>" + msg.documents[i].authors + "</p>");
    }
  });