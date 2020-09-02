$(document).ready(function () {
  $("#design-icon").click(function () {
    $("#design-icon").hide();
    $("#design-paragraph").show();
  });
  $("#design-paragraph").click(function () {
    $("#design-icon").show();
    $("#design-paragraph").hide();
  });

  $("#development-icon").click(function () {
    $("#development-icon").hide();
    $("#development-paragraph").show();
  });
  $("#development-paragraph").click(function () {
    $("#development-icon").show();
    $("#development-paragraph").hide();
  });

  $("#product-icon").click(function () {
    $("#product-icon").hide();
    $("#product-paragraph").show();
  });
  $("#product-paragraph").click(function () {
    $("#product-icon").show();
    $("#product-paragraph").hide();
  });
});

$(document).ready(function () {
  $(".card0").mouseover(function () {
    $(".work0").show();
  });
  $(".card0").mouseout(function () {
    $(".work0").hide();
  });
  $(".card1").mouseover(function () {
    $(".work1").show();
  });
  $(".card1").mouseout(function () {
    $(".work1").hide();
  });
  $(".card2").mouseover(function () {
    $(".work2").show();
  });
  $(".card2").mouseout(function () {
    $(".work2").hide();
  });
  $(".card3").mouseover(function () {
    $(".work3").show();
  });
  $(".card3").mouseout(function () {
    $(".work3").hide();
  });
  $(".card4").mouseover(function () {
    $(".work4").show();
  });
  $(".card4").mouseout(function () {
    $(".work4").hide();
  });
  $(".card5").mouseover(function () {
    $(".work5").show();
  });
  $(".card5").mouseout(function () {
    $(".work5").hide();
  });
  $(".card6").mouseover(function () {
    $(".work6").show();
  });
  $(".card6").mouseout(function () {
    $(".work6").hide();
  });
  $(".card7").mouseover(function () {
    $(".work7").show();
  });
  $(".card7").mouseout(function () {
    $(".work7").hide();
  });
});

//form function
function feedback(form) {
  var name = document.forms["feedback"]["name"].value;
  var email = document.forms["feedback"]["email"].value;
  var message = document.forms["feedback"]["message"].value;
  alert(
    "Hello! " +
      name +
      "," +
      " Your message has been received. Thanks for your feedback. "
  );
}
