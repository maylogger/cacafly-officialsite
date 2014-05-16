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

google.maps.event.addDomListener(window, 'load', buildMap(25.0329289, 121.548378, "taipei-map", "台北據點"));
google.maps.event.addDomListener(window, 'load', buildMap(24.7847633, 121.0182392, "hsinchu-map", "新竹據點"));
google.maps.event.addDomListener(window, 'load', buildMap(24.1830855, 120.6139413, "taichung-map", "台中據點"));
