$(".flow-switch .origin").on("click",function(){
  $(".origin").addClass("active");
  $(".zmot").removeClass("active");
});
$(".flow-switch .zmot").on("click",function(){
  $(".zmot").addClass("active");
  $(".origin").removeClass("active");
});

// scrollspy

$(window).load(function() {
  var windowHeight = $(window).height();
  var scrollOffset = windowHeight / 2.8;
  $('body').scrollspy({
    target: '.sub-nav',
    offset: scrollOffset
  });

  setTimeout(function(){

      $('.spy-animation .block').each(function(){
        var windowScrollTop = $(window).scrollTop();
        var windowHalf = windowScrollTop + scrollOffset;
        if ( $(this).offset().top < windowHalf && $(this).offset().top + $(this).height() > windowHalf ) {
          $(this).addClass("active");
        }
      });

  }, 2000);


}).resize( function() {
  var windowHeight = $(window).height();
  var scrollOffset = windowHeight / 2.8;
  $('body').scrollspy("refresh", {
    target: '.sub-nav',
    offset: scrollOffset
  });
});

// scrollspy remove active trigger
// $('.sub-nav li').on('activate.bs.scrollspy', function () {
//   $(".zoom-animation, .slideup-animation, .rotate-animation").removeClass("active");
// });

// scrollspy active trigger
$('.google-feature').on('activate.bs.scrollspy', function () {
  $(".google-feature.rotate-animation").addClass("active");
});

$('.google-search').on('activate.bs.scrollspy', function () {
  $(".google-search.zoom-animation").addClass("active");
});

$('.google-media').on('activate.bs.scrollspy', function () {
  $(".google-media.rotate-animation").addClass("active");
});

$('.youtube-ad-type').on('activate.bs.scrollspy', function () {
  $(".youtube-ad-type.zoom-animation").addClass("active");
});

$('.mobile-ad').on('activate.bs.scrollspy', function () {
  $(".mobile-ad.slideup-animation").addClass("active");
});

$('.fb-ad').on('activate.bs.scrollspy', function () {
  $(".fb-ad.zoom-animation").addClass("active");
});

$('.fb-positive').on('activate.bs.scrollspy', function () {
  $(".fb-positive.zoom-animation").addClass("active");
});

$('.fb-position').on('activate.bs.scrollspy', function () {
  $(".fb-position.slideup-animation").addClass("active");
});

$('.fb-feature').on('activate.bs.scrollspy', function () {
  $(".fb-feature.slideup-animation").addClass("active");
});

$('.fb-user-active').on('activate.bs.scrollspy', function () {
  $(".fb-user-active.zoom-animation").addClass("active");
});

$('.fb-retargeting').on('activate.bs.scrollspy', function () {
  $(".fb-retargeting.slideup-animation").addClass("active");
});

$('.msn-ad-set').on('activate.bs.scrollspy', function () {
  $(".msn-ad-set.zoom-animation").addClass("active");
});

$('.msn-positive').on('activate.bs.scrollspy', function () {
  $(".msn-positive.slideup-animation").addClass("active");
});

$('.skype-ad-type').on('activate.bs.scrollspy', function () {
  $(".skype-ad-type.zoom-animation").addClass("active");
});

$('.skype-feature').on('activate.bs.scrollspy', function () {
  $(".skype-feature.slideup-animation").addClass("active");
});

$('.outlook-ad-type').on('activate.bs.scrollspy', function () {
  $(".outlook-ad-type.zoom-animation").addClass("active");
});
