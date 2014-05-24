$(document).ready(function() {
  new CameraController(new CameraView()).bindCameraListener()
  LocationUpdater.getCoordinates()
})