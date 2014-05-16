var googleMobileUserData = {
  labels : ["2007","2008","2009","2010","2011","2012","2013","2014"],
  datasets : [
    {
      fillColor : "rgba(39,121,183,.5)",
      pointColor : "rgba(39,121,183,1)",
      strokeColor : "rgba(39,121,183,0)",
      data : [400,600,800,1000,1100,1300,1400,1600]
    },
  ]
};

var googleRemarketingUserData = {
  labels : ["未造訪者","回訪者","再行銷"],
  datasets : [
    {
      fillColor : "rgba(39,121,183,.5)",
      pointColor : "rgba(39,121,183,1)",
      strokeColor : "rgba(39,121,183,0)",
      data : [1,3,6]
    },
  ]
};

var googleMobileUser = document.getElementById("google-mobile-user").getContext("2d");
new Chart(googleMobileUser).Line(googleMobileUserData, {
  animationEasing : "easeOutQuart" ,
  scaleOverride : true,
  scaleSteps : 9,
  scaleStepWidth : 200,
  scaleStartValue : 0,
  scaleFontSize : 16,
  bezierCurve : false,
  barValueSpacing : 20
});

var googleRemarketingUser = document.getElementById("google-remarketing-user").getContext("2d");
new Chart(googleRemarketingUser).Bar(googleRemarketingUserData, {
  animationEasing : "easeOutQuart" ,
  scaleOverride : true,
  scaleSteps : 7,
  scaleStepWidth : 1,
  scaleStartValue : 0,
  scaleFontSize : 16,
  barValueSpacing : 20
});