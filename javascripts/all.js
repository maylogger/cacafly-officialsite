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
equalheight = function(container){

var currentTallest = 0,
     currentRowStart = 0,
     rowDivs = new Array(),
     $el,
     topPosition = 0;
 $(container).each(function() {

   $el = $(this);
   $($el).height('auto');
   topPostion = $el.position().top;

   if (currentRowStart != topPostion) {
     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
       rowDivs[currentDiv].height(currentTallest);
     }
     rowDivs.length = 0; // empty the array
     currentRowStart = topPostion;
     currentTallest = $el.height();
     rowDivs.push($el);
   } else {
     rowDivs.push($el);
     currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
  }
   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
     rowDivs[currentDiv].height(currentTallest);
   }
 });
};

$(window).load(function() {
  equalheight('.item.member, .mktreport .item-text, .location');
});


$(window).resize(function(){
  equalheight('.item.member, .mktreport .item-text, .location');
});

// number counter for facebook page with bonana king's stepper.js
$('.stepper').zero().play();