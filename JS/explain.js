$(function () {
  $.get("./explainText.txt", function (msg) {
    $(".explain").html(msg);
  })
  $.get("./authorText.txt", function (msg) {
    $(".authorText").html(msg);
  })
  $.get("./publisherText.txt", function (msg) {
    $(".publisherText").html(msg);
  })
  $.get("./categoryText.txt", function (msg) {
    $(".categoryText").html(msg);
  })
});