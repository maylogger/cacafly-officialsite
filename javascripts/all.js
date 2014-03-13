// image tag svg fallback with modernizr
if(!Modernizr.svg) {
    $('img[src*="svg"]').attr('src', function() {
        return $(this).attr('src').replace('.svg', '.png');
    });
}

// 移動 dom
$( ".main-nav ul" ).appendAround();

// sub-nav trigger
$(".sub-nav-title").on("click",function(){
  $(".sub-nav,.sub-nav-title").toggleClass("open");
  event.preventDefault();
});
$(".nav li").on("click",function(){
  $(".sub-nav,.sub-nav-title").delay(50).queue(function(){
    $(".sub-nav,.sub-nav-title").removeClass("open").dequeue();
  });
});

// bs-carousel
$('.carousel').carousel();

//hc sticky
$('.aside-sticky').hcSticky({
  top: 20,
  responsive: true,
  offResolutions: -940
});

$('.nav-sticky').hcSticky({
  top: -1,
  noContainer: true,
  responsive: true,
});

//collapse button switch content
$('.collapse-toggle-button').click(function(){
  $(this).toggleClass('close');
  if($(this).text() == '展開'){
    $(this).text('收合');
  } else {
    $(this).text('展開');
  }
});

// collapse switch accord dom height
$('.collapse-content').each(function(){
  if ( $(this).height() < 400 ) {
    $(this).parent().css("height","auto");
    $(this).parent().next('.collapse-toggle').remove();
  }
});

// equal height
$('.mktreport').each(function(){
  var highestBox = 0;
  $('.item-text', this).each(function(){
  if($(this).height() > highestBox)
     highestBox = $(this).height();
  });
  $('.item-text',this).height(highestBox);
});

// number counter for facebook page with bonana king's stepper.js
$('.stepper').zero().play();