var fbEcwebData = [
  { value: 40, color: "#92A3AC" },
  { value : 60, color : "#2779B7" },
];
var fbEventwebData = [
  { value: 90, color: "#92A3AC" },
  { value : 10, color : "#2779B7" },
];
var fbActivewebData = [
  { value: 60, color: "#92A3AC" },
  { value : 40, color : "#2779B7" },
];

var fbEcweb = $("#fb-ecweb-chart").get(0).getContext("2d");
new Chart(fbEcweb).Pie(fbEcwebData, { animationEasing : "easeOutQuart" });

var fbEventweb = $("#fb-eventweb-chart").get(0).getContext("2d");
new Chart(fbEventweb).Pie(fbEventwebData, { animationEasing : "easeOutQuart" });

var fbActiveweb = $("#fb-activeweb-chart").get(0).getContext("2d");
new Chart(fbActiveweb).Pie(fbActivewebData, { animationEasing : "easeOutQuart" });

