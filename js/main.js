$(document).ready(function () {
  var currentFloor = 2;
  var counterUp = $(".main-info__counter-up")
  var counterDown = $(".main-info__counter-down")
  $('.main-image__home path').on("mouseover", function(){
    currentFloor = $(this).attr("data-floor");
    $(".main-info__counter").text(currentFloor);
  });

  counterUp.on("click", function(){
   if (currentFloor < 18) {
    currentFloor++
    usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
    $(".main-info__counter").text(usCurrentFloor);
    $(".main-image__home path").removeClass("current-floor");
    $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
   }
  });
  
  counterDown.on("click", function(){
   if (currentFloor > 2) {
    currentFloor--
    usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
    $(".main-info__counter").text(usCurrentFloor);
    $(".main-image__home path").removeClass("current-floor");
    $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
   }
  });
});