$(".flow-switch .origin").on("click",function(){
  $(".origin").addClass("active");
  $(".zmot").removeClass("active");
});
$(".flow-switch .zmot").on("click",function(){
  $(".zmot").addClass("active");
  $(".origin").removeClass("active");
});

// scrollspy active trigger
$(function(){
  $(".tile-animation").addClass("standby");
});

$('.google-ad-type').on('activate.bs.scrollspy', function () {
  $(".google.tile-animation").removeClass("standby");
});

$('.youtube-ad-type').on('activate.bs.scrollspy', function () {
  $(".youtube.tile-animation").removeClass("standby");
});
