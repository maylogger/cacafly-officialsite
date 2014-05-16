var fbEcwebData = [
  { value : 40, color : "#92A3AC" },
  { value : 60, color : "#2779B7" },
];
var fbEventwebData = [
  { value : 90, color : "#92A3AC" },
  { value : 10, color : "#2779B7" },
];
var fbActivewebData = [
  { value : 60, color : "#92A3AC" },
  { value : 40, color : "#2779B7" },
];


var fbEcweb = document.getElementById("fb-ecweb-chart").getContext("2d");
new Chart(fbEcweb).Pie(fbEcwebData, { animationEasing : "easeOutQuart" });

var fbEventweb = document.getElementById("fb-eventweb-chart").getContext("2d");
new Chart(fbEventweb).Pie(fbEventwebData, { animationEasing : "easeOutQuart" });

var fbActiveweb = document.getElementById("fb-activeweb-chart").getContext("2d");
new Chart(fbActiveweb).Pie(fbActivewebData, { animationEasing : "easeOutQuart" });