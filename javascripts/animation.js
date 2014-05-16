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
  $(".zoom-animation, .slideup-animation").addClass("standby");
});

$('.google-search').on('activate.bs.scrollspy', function () {
  $(".google-search.zoom-animation").removeClass("standby");
});

$('.youtube-ad-type').on('activate.bs.scrollspy', function () {
  $(".youtube-ad-type.zoom-animation").removeClass("standby");
});

$('.mobile-ad').on('activate.bs.scrollspy', function () {
  $(".mobile-ad.slideup-animation").removeClass("standby");
});

$('.fb-ad').on('activate.bs.scrollspy', function () {
  $(".fb-ad.zoom-animation").removeClass("standby");
});

$('.fb-positive').on('activate.bs.scrollspy', function () {
  $(".fb-positive.zoom-animation").removeClass("standby");
});

$('.fb-feature').on('activate.bs.scrollspy', function () {
  $(".fb-feature.slideup-animation").removeClass("standby");
});

$('.fb-user-active').on('activate.bs.scrollspy', function () {
  $(".fb-user-active.zoom-animation").removeClass("standby");
});

$('.fb-retargeting').on('activate.bs.scrollspy', function () {
  $(".fb-retargeting.slideup-animation").removeClass("standby");
});

$('.msn-positive').on('activate.bs.scrollspy', function () {
  $(".msn-positive.slideup-animation").removeClass("standby");
});

$('.skype-ad-type').on('activate.bs.scrollspy', function () {
  $(".skype-ad-type.zoom-animation").removeClass("standby");
});

$('.skype-feature').on('activate.bs.scrollspy', function () {
  $(".skype-feature.slideup-animation").removeClass("standby");
});
