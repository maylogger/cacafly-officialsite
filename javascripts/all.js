// 移動 dom
$( ".main-nav ul" ).appendAround();

// sub-nav trigger
$(".sub-nav-title").on("click",function(){
  $(".sub-nav,.sub-nav-title").toggleClass("open");
  event.preventDefault();
});

//hc affix
$('.affix').hcSticky({
  top: 20,
  responsive: true,
  offResolutions: -940
});
