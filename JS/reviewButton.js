$(window).scroll(function(){
  currentScrollTop = $(window).scrollTop();


    if ($(".shortBook").css("display") == "block" && currentScrollTop > 3100) {
      $(".review").addClass("bg");
      $(".introduce").removeClass("bg");
    } else if ($(".shortBook").css("display") == "none" && currentScrollTop > 9200) {
      $(".review").addClass("bg");
      $(".introduce").removeClass("bg");
    } else {
      $(".introduce").addClass("bg");
      $(".review").removeClass("bg");
    }
  });

  // $(function(){
  //   if($(".shortBook").css("display") == "block"){
  //     $(".review").addClass("bg");
  //     $(".introduce").removeClass("bg");
  //   } else {
  //     $(".introduce").addClass("bg");
  //     $(".review").removeClass("bg");
  //   }
  // });
 
