$(function() {
  var price_sum = 18900;

//플러스//
  $('.quantity_btn2').click(function () {
    if ($(".counting").val() > 999) {
      alert("1000권 초과 구매가 불가능합니다.");
      $(".counting").val(1000);
    } else {
      $(".counting").val(parseInt($(".counting").val()) + 1);
      var sum = parseInt($(".counting").val() * price_sum);
      $("#priceFirst").html("<span>" + sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원</span>");
    }
  });

  //마이너스//
  $('.quantity_btn1').click(function () {
    if ($(".counting").val() < 2) {
      alert("1권 이상 구매가 가능합니다.");
      $(".counting").val(2);
    }
    $(".counting").val(parseInt($(".counting").val()) - 1);
    var sum = parseInt($(".counting").val() * price_sum);
    $("#priceFirst").html("<span>" + sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원</span>");
  });

  //경고창//
    $(".counting").keyup(function () {
      if ($(".counting").val() > 1000) {
        alert("1000권 초과 구매가 불가능합니다.");
        $(".counting").val(1000);
      } else if ($(".counting").val() < 1) {
        alert("1권 이상 구매가 가능합니다.");
        $(".counting").val(1);
      } else if (isNaN($(".counting").val())) {
        alert("숫자를 입력하세요.")
        $(".counting").val(1);
      } else if (($(".counting").val() * 10) % 10 != 0) {
        alert("정수를 입력하세요");
        $(".counting").val(1);
      }
      var sum1 = parseInt($(".counting").val() * price_sum);
      $("#priceFirst").html("<span>" + sum1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원 </span>");
    });

    $(".slt").change(function () {
      var add=parseInt($(this).val());
      var sum2 = parseInt($(".counting").val() * price_sum + add );
        $("#priceFirst").html("<span>" + sum2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원 </span>");
    });
});


$(function () {
  var price_sum = 18900;

//플러스//
  $('.count_btn2').click(function () {
    if ($(".count").val() > 999) {
      alert("1000권 초과 구매가 불가능합니다.");
      $(".count").val(1000);
    } else {
      $(".count").val(parseInt($(".count").val()) + 1);
      var sum = parseInt($(".count").val() * price_sum);
      $("#price").html("<span>" + sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원</span>");
    }
  });

  //마이너스//
  $('.count_btn1').click(function () {
    if ($(".count").val() < 2) {
      alert("1권 이상 구매가 가능합니다.");
      $(".count").val(2);
    }
    $(".count").val(parseInt($(".count").val()) - 1);
    var sum = parseInt($(".count").val() * price_sum);
    $("#price").html("<span>" + sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원</span>");
  });

  //경고창//
    $(".count").keyup(function () {
      if ($(".count").val() > 1000) {
        alert("1000권 초과 구매가 불가능합니다.");
        $(".count").val(1000);
      } else if ($(".count").val() < 1) {
        alert("1권 이상 구매가 가능합니다.");
        $(".count").val(1);
      } else if (isNaN($(".count").val())) {
        alert("숫자를 입력하세요.")
        $(".count").val(1);
      } else if (($(".count").val() * 10) % 10 != 0) {
        alert("정수를 입력하세요");
        $(".count").val(1);
      }
      var sum1 = parseInt($(".count").val() * price_sum);
      $("#price").html("<span>" + sum1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원 </span>");
    });

    $("#rightBox_select").change(function () {
      var add=parseInt($(this).val());
      var sum2 = parseInt($(".count").val() * price_sum + add );
        $("#price").html("<span>" + sum2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원 </span>");
    });

});