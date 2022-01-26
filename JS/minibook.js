$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: {query: "2022 선재국어 나침반", sort: "latest", size: 10},
  headers: { Authorization: "KakaoAK c520cb5172aeec952fa88823508d155b" }
})
  .done(function (msg) {
    var minibooks = document.getElementsByClassName('rightBox_quentity_left');

    for (var i = 0; i < minibooks.length; i++) {
      $(".rightBox_quentity_left").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");

      var str5 = msg.documents[i].title;
      var str6 = str5.substring(0, 32);

      $(".rightBox_quentity_left").eq(i).append("<h4>" + str6 + "</h4>");

    }
  });