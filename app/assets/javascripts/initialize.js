$(document).ready(function() {
  new CameraController(new CameraView()).bindCameraListener()
  var firebaseController
  var coordinates
  LocationUpdater.getCoordinates()
  LocationUpdater.setCoordinateUpdater()
})