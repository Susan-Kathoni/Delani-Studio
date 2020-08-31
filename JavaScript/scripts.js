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
