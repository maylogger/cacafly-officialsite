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

function removeActive() {
  $('ul.nav li').removeClass('active'); // fix onStop active state unrelease
}

function addActive() {
  $('ul.nav li:first').addClass('active');
}

$('.nav-sticky').hcSticky({
  top: -1,
  noContainer: true,
  responsive: true,
  onStop: removeActive,
  onStart: addActive
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
  equalheight('.item.member, .mktreport .item-text, .location, .ad-flow .item');
});


$(window).resize(function(){
  equalheight('.item.member, .mktreport .item-text, .location, .ad-flow .item');
});

// number counter for facebook page with bonana king's stepper.js
$('.stepper').zero().play();

// google map API
function buildMap(lat, lng, id, popcontent) {
    var myLatlng = new google.maps.LatLng(lat, lng);
    var mapOptions = {
        zoom: 15,
        center: myLatlng,
        scrollwheel: false,
        streetViewControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById(id), mapOptions);

    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'marker'
    });

    var infowindow = new google.maps.InfoWindow({
      content: popcontent
  });
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });
}

google.maps.event.addDomListener(window, 'load', buildMap(25.0424799, 121.564947, "taipei-map", "台北據點"));
google.maps.event.addDomListener(window, 'load', buildMap(24.7847633, 121.0182392, "hsinchu-map", "新竹據點"));
google.maps.event.addDomListener(window, 'load', buildMap(24.1830855, 120.6139413, "taichung-map", "台中據點"));

// scrollspy active trigger
// $('.adtype').on('activate.bs.scrollspy', function () {
//   $(".fb-card-style").addClass("active");
// });