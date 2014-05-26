$(document).ready(function() {
  new CameraController(new CameraView()).bindCameraListener()
  // global var
  var coordinates = []
  LocationUpdater.getCoordinates()
})

