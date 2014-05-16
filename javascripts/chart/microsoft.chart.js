var msUserSalaryData = [
  { value : 67, color : "#D1DCE0" },
  { value : 33, color : "#359900" },
];
var msUserPositionData = [
  { value : 50, color : "#D1DCE0" },
  { value : 50, color : "#2779B7" },
];
var msUserLocationData = [
  { value : 40, color : "#D1DCE0" },
  { value : 60, color : "#7C5122" },
];

var msUserSalary = document.getElementById("ms-user-salary").getContext("2d");
new Chart(msUserSalary).Doughnut(msUserSalaryData, { animationEasing : "easeOutQuart" });

var msUserPosition = document.getElementById("ms-user-position").getContext("2d");
new Chart(msUserPosition).Doughnut(msUserPositionData, { animationEasing : "easeOutQuart" });

var msUserLocation = document.getElementById("ms-user-location").getContext("2d");
new Chart(msUserLocation).Doughnut(msUserLocationData, { animationEasing : "easeOutQuart" });