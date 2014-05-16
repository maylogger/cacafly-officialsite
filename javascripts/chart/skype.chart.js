var skypeUserTypeData = {
  labels : ["朋友：0.83","家人：0.5","同事：0.46"],
  datasets : [
    {
      fillColor : "rgba(39,121,183,.8)",
      strokeColor : "rgba(39,121,183,0)",
      data : [0.83,0.5,0.46]
    },
  ]
};

var skypeUserType = document.getElementById("skype-user-type").getContext("2d");
new Chart(skypeUserType).Bar(skypeUserTypeData, {
  animationEasing : "easeOutQuart" ,
  scaleOverride : true,
  scaleSteps : 5,
  scaleStepWidth : 0.2,
  scaleStartValue : 0,
  scaleFontSize : 16,
  barValueSpacing : 20
  });