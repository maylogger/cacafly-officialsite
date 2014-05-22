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

$('.header').affix({
  offset: {
    top: 72
  }
});


//hc sticky
$('.aside-sticky').hcSticky({
  top: 72,
  responsive: true,
  offResolutions: -940
});

function removeActive() {
  $('ul.nav li').removeClass('active'); // fix onStop active state unrelease
}

function addActive() {
  $('ul.nav li:first').addClass('active');
}

$('.nav-sticky').hcSticky({
  top: 48,
  noContainer: true,
  responsive: true,
  offResolutions: -760,
  onStop: removeActive,
  onStart: addActive
});

$('.nav-sticky-nospy').hcSticky({
  top: 48,
  noContainer: true,
  responsive: true,
  offResolutions: -860
});

$('.report-download').magnificPopup({
  type: 'ajax'
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
  equalheight('.item.member, .mktreport .item-text, .location, .positive .item, .ad-flow .item, .card-style .item, .card-link-style .item');
});


$(window).resize(function(){
  equalheight('.item.member, .mktreport .item-text, .location, .positive .item, .ad-flow .item, .card-style .item, .card-link-style .item');
});

// number counter for facebook page with stepper.js
$('.stepper').zero().play();