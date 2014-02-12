// 移動 dom
$( ".main-nav ul" ).appendAround();

// sub-nav trigger
$(".sub-nav-trigger").on("click",function(){
  $(".sub-nav,.sub-nav-trigger").toggleClass("open");
  event.preventDefault();
});
