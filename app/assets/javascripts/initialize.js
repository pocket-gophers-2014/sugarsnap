$(document).ready(function() {
  new CameraController(new CameraView()).bindCameraListener()
  var coordinates = []
  LocationUpdater.getCoordinates()
})