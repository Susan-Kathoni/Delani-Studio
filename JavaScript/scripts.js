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
  $(".img-fluid").mouseover(function () {
    $("#Portfolio-img1").show();
  });
  $(".img-fluid").mouseout(function () {
    $("#Portfolio-img1").hide();
  });
  $(".img-fluid2").mouseover(function () {
    $(".#Portfolio-img2").show();
  });
  $(".img-fluid2").mouseout(function () {
    $("#Portfolio-img2").hide();
  });
  $(".img-fluid3").mouseover(function () {
    $("#Portfolio-img3").show();
  });
  $(".img-fluid3").mouseout(function () {
    $("#Portfolio-img3").hide();
  });
  $(".img-fluid4").mouseover(function () {
    $("#Portfolio-img4").show();
  });
  $(".img-fluid4").mouseout(function () {
    $(".#Portfolio-img4").hide();
  });
  $(".img-fluid5").mouseover(function () {
    $("#Portfolio-img5").show();
  });
  $(".img-fluid5").mouseout(function () {
    $("#Portfolio-img5").hide();
  });
  $(".img-fluid6").mouseover(function () {
    $("#Portfolio-img6").show();
  });
  $(".img-fluid6").mouseout(function () {
    $("#Portfolio-img6").hide();
  });
  $(".img-fluid7").mouseover(function () {
    $("#Portfolio-img7").show();
  });
  $(".img-fluid7").mouseout(function () {
    $("#Portfolio-img7").hide();
  });
  $(".img-fluid8").mouseover(function () {
    $("#Portfolio-img8").show();
  });
  $(".img-fluid8").mouseout(function () {
    $("#Portfolio-img8").hide();
  });
});

//form function
function contact(form) {
  var name = document.forms["contacts"]["name"].value;
  var email = document.forms["contacts"]["email"].value;
  var message = document.forms["contacts"]["message"].value;
  alert(
    "Hello! " +
      name +
      "," +
      " Your message has been received. Thanks for your feedback. "
  );
}
