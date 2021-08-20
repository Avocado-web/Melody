$(document).ready(function () {
  var currentFloor = 2;
  var counterUp = $(".main-info__counter-up")
  var counterDown = $(".main-info__counter-down")
  var floorPath = $(".main-image__home path");
  var modal = $(".modal")
  var modalCloseButton = $(".modal-close-button")
  var modalOpenButton = $(".main-info__button-primary")


  floorPath.on("mouseover", function(){
    floorPath.removeClass("current-floor");
    currentFloor = $(this).attr("data-floor");
    $(".counter").text(currentFloor);
  });

  modalOpenButton.on("click", toggleModal);
  floorPath.on("click",toggleModal);
  modalCloseButton.on("click", toggleModal);

  counterUp.on("click", function(){
    if (currentFloor < 18) {
      currentFloor++;
      usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
      $(".counter").text(usCurrentFloor);
      floorPath.removeClass("current-floor");
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
    }
  });
  
  counterDown.on("click", function(){
    if (currentFloor > 2) {
      currentFloor--;
      usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
      $(".counter").text(usCurrentFloor);
      floorPath.removeClass("current-floor");
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
    }
  });
  function toggleModal(){
    modal.toggleClass("modal-is-open");
  };
});