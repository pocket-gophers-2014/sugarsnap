$(document).ready(function() {
  new CameraController(new CameraView()).bindCameraListener()
  // global var
  var coordinates = []
  LocationUpdater.getCoordinates()
  var header = document.getElementById("header");
  header.addEventListener('click', toggleSubheaderDisplay, false);
})

function toggleSubheaderDisplay(evt) {
  var header = document.getElementById("header");
  console.log('toggle the header');
  $('#subheader').toggle();
}

