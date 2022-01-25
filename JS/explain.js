$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: {query: "2022 선재국어", sort: "latest", size: 10},
  headers: {Authorization: "KakaoAK c520cb5172aeec952fa88823508d155b"}
})
  .done(function (msg) {
    var explains = document.getElementsByClassName('explain');

      var str = msg.documents[0].contents;
      $(".explain").append("<p>" + str + "</p>");
  });

//메모장으로 sub 텍스트 가져오기, 서버에 올려야 보임

$(function () {
  $.get("./explainText", function (msg) {
      $("sub").html(msg);
  })
});