$(".disclosure button").click(function() {
  $(".disclosure button span i").toggleClass("rotate-180");
  $(".long_text").slideToggle();
  $(".long_text p").load("hidden.html");
});

$("nav button").click(function() {
  $("nav button span:first-child").toggleClass("menu_button_rotate_1");
  $("nav button span:nth-child(2)").toggle();
  $("nav button span:last-child").toggleClass("menu_button_rotate_2");
  $(".mobile_class ul").slideToggle();


})



$(window).resize(function() {
  if ($(window).width() < 980) {
    $(".flex_slide_footer ul li").css("display", "none")
  } else if ($(window).width() > 980) {
    $(".flex_slide_footer ul li").css("display", "block")
  }

});

$('.sliding_h4_new').on("click", function() {
  if ($(window).width() <= 770){
  $(this).nextAll("li").slideToggle()};
});
$(window).resize(function(){
    if ($(window).width() >= 770){
      $(".non_slide_footer ul li").css("display","block");
      $(".big_section").css("display", "inline-flex");
      $(".mobile_class ul ").css("display", "block");
    }else if ($(window).width() <= 770) {
      $(".mobile_class ul").css("display", "none");
        $(".non_slide_footer ul li").css("display","none");
        $(".ajax_content").css("display", "none");
        $(".big_section").css("display", "none");
    }
});

$('.sliding_h4').on("click", function() {
  $(this).nextAll("li").slideToggle();
});

$(function(){
   $(".show_all_img button").click(function () {
      $(this).text(function(i, text){
          return text === "Show less" ? "Show more" : "Show less";
      })
      $(".big_section").slideToggle();
   });
})
