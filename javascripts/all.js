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

// google map API
function taipeiMap() {
    var myLatlng = new google.maps.LatLng(25.0424799, 121.564947);
    var mapOptions = {
        zoom: 14,
        center: myLatlng,
        scrollwheel: false,
        streetViewControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById('taipei-map'), mapOptions);

    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'marker'
    });

    var infowindow = new google.maps.InfoWindow({
      content: "台北據點"
  });
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });
}

function taipeiMap() {
    var myLatlng = new google.maps.LatLng(25.0424799, 121.564947);
    var mapOptions = {
        zoom: 15,
        center: myLatlng,
        scrollwheel: false,
        streetViewControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById('taipei-map'), mapOptions);

    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'marker'
    });

    var infowindow = new google.maps.InfoWindow({
      content: "台北據點"
  });
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });
}

function hsinchuMap() {
    var myLatlng = new google.maps.LatLng(24.7847633, 121.0182392);
    var mapOptions = {
        zoom: 15,
        center: myLatlng,
        scrollwheel: false,
        streetViewControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById('hsinchu-map'), mapOptions);

    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'marker'
    });

    var infowindow = new google.maps.InfoWindow({
      content: "新竹據點"
  });
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });
}

function taichungMap() {
    var myLatlng = new google.maps.LatLng(24.1830855, 120.6139413);
    var mapOptions = {
        zoom: 15,
        center: myLatlng,
        scrollwheel: false,
        streetViewControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById('taichung-map'), mapOptions);

    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'marker'
    });

    var infowindow = new google.maps.InfoWindow({
      content: "台中據點"
  });
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });
}

google.maps.event.addDomListener(window, 'load', taipeiMap);
google.maps.event.addDomListener(window, 'load', hsinchuMap);
google.maps.event.addDomListener(window, 'load', taichungMap);

// $('.adtype').on('activate.bs.scrollspy', function () {
//   $(".fb-card-style").addClass("active");
// });