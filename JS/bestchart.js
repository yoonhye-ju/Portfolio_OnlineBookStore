$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "시험", sort: "latest", size: 50 },
  headers: { Authorization: "KakaoAK c520cb5172aeec952fa88823508d155b" }
})
  .done(function (msg) {
    var picboxs = document.getElementsByClassName('bestchart');

    for (var i = 0; i < picboxs.length; i++) {
      $(".bestchart").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
      $(".bestchart").eq(i).append("<h5>" + msg.documents[i].publisher + "</h5>");

      var str = msg.documents[i].title;
      var str2 = str.substring(0, 20);

      $(".bestchart").eq(i).append("<h4>" + str2 + "</h4>");

      $(".bestchart").eq(i).append("<p>" + msg.documents[i].authors + "</p>");
    }
  });

  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "문학", sort: "latest", size: 50 },
    headers: { Authorization: "KakaoAK c520cb5172aeec952fa88823508d155b" }
  })
    .done(function (msg) {
      var picboxs = document.getElementsByClassName('bestchart2');
  
      for (var i = 0; i < picboxs.length; i++) {
        $(".bestchart2").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
        $(".bestchart2").eq(i).append("<h5>" + msg.documents[i].publisher + "</h5>");
  
        var str = msg.documents[i].title;
        var str2 = str.substring(0, 20);
  
        $(".bestchart2").eq(i).append("<h4>" + str2 + "</h4>");
  
        $(".bestchart2").eq(i).append("<p>" + msg.documents[i].authors + "</p>");
      }
    });

    $.ajax({
      method: "GET",
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data: { query: "인문교양", sort: "latest", size: 50 },
      headers: { Authorization: "KakaoAK c520cb5172aeec952fa88823508d155b" }
    })
      .done(function (msg) {
        var picboxs = document.getElementsByClassName('bestchart3');
    
        for (var i = 0; i < picboxs.length; i++) {
          $(".bestchart3").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
          $(".bestchart3").eq(i).append("<h5>" + msg.documents[i].publisher + "</h5>");
    
          var str = msg.documents[i].title;
          var str2 = str.substring(0, 20);
    
          $(".bestchart3").eq(i).append("<h4>" + str2 + "</h4>");
    
          $(".bestchart3").eq(i).append("<p>" + msg.documents[i].authors + "</p>");
        }
      });

      $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "경제경영", sort: "latest", size: 50 },
        headers: { Authorization: "KakaoAK c520cb5172aeec952fa88823508d155b" }
      })
        .done(function (msg) {
          var picboxs = document.getElementsByClassName('bestchart4');
      
          for (var i = 0; i < picboxs.length; i++) {
            $(".bestchart4").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
            $(".bestchart4").eq(i).append("<h5>" + msg.documents[i].publisher + "</h5>");
      
            var str = msg.documents[i].title;
            var str2 = str.substring(0, 20);
      
            $(".bestchart4").eq(i).append("<h4>" + str2 + "</h4>");
      
            $(".bestchart4").eq(i).append("<p>" + msg.documents[i].authors + "</p>");
          }
        });

        $.ajax({
          method: "GET",
          url: "https://dapi.kakao.com/v3/search/book?target=title",
          data: { query: "수험서", sort: "latest", size: 50 },
          headers: { Authorization: "KakaoAK c520cb5172aeec952fa88823508d155b" }
        })
          .done(function (msg) {
            var picboxs = document.getElementsByClassName('bestchart5');
        
            for (var i = 0; i < picboxs.length; i++) {
              $(".bestchart5").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
              $(".bestchart5").eq(i).append("<h5>" + msg.documents[i].publisher + "</h5>");
        
              var str = msg.documents[i].title;
              var str2 = str.substring(0, 20);
        
              $(".bestchart5").eq(i).append("<h4>" + str2 + "</h4>");
        
              $(".bestchart5").eq(i).append("<p>" + msg.documents[i].authors + "</p>");
            }
          });

          $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "자기계발", sort: "latest", size: 50 },
            headers: { Authorization: "KakaoAK c520cb5172aeec952fa88823508d155b" }
          })
            .done(function (msg) {
              var picboxs = document.getElementsByClassName('bestchart6');
          
              for (var i = 0; i < picboxs.length; i++) {
                $(".bestchart6").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
                $(".bestchart6").eq(i).append("<h5>" + msg.documents[i].publisher + "</h5>");
          
                var str = msg.documents[i].title;
                var str2 = str.substring(0, 20);
          
                $(".bestchart6").eq(i).append("<h4>" + str2 + "</h4>");
          
                $(".bestchart6").eq(i).append("<p>" + msg.documents[i].authors + "</p>");
              }
            });

            $.ajax({
              method: "GET",
              url: "https://dapi.kakao.com/v3/search/book?target=title",
              data: { query: "다이어트", sort: "latest", size: 50 },
              headers: { Authorization: "KakaoAK c520cb5172aeec952fa88823508d155b" }
            })
              .done(function (msg) {
                var picboxs = document.getElementsByClassName('bestchart6');
            
                for (var i = 0; i < picboxs.length; i++) {
                  $(".bestchart7").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
                  $(".bestchart7").eq(i).append("<h5>" + msg.documents[i].publisher + "</h5>");
            
                  var str = msg.documents[i].title;
                  var str2 = str.substring(0, 20);
            
                  $(".bestchart7").eq(i).append("<h4>" + str2 + "</h4>");
            
                  $(".bestchart7").eq(i).append("<p>" + msg.documents[i].authors + "</p>");
                }
              });