var num = 0;

$("header ul li:first-child").click(function() {
  $(".ajax_content").empty();

  $(".ajax_content").slideToggle();
  $(".ajax_content").load("ajax_vehicles.html");

});

$("header ul li:nth-child(2)").click(function() {
  $(".ajax_content").empty();
  $(".ajax_content").slideToggle();
  $(".ajax_content").load("ajax_shop.html");

});

$("header ul li:nth-child(3)").click(function() {
  $(".ajax_content").empty();
  $(".ajax_content").slideToggle();
  $(".ajax_content").load("ajax_finance.html");

});
$("header ul li:nth-child(4)").click(function() {
  $(".ajax_content").slideToggle();
  $(".ajax_content").empty();
  $(".ajax_content").load("ajax_owner.html");

});
