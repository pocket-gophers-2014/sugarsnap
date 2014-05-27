$(document).ready(function() {

  gCoordinates = []
  LocationUpdater.getCoordinates()
  new CameraController(new CameraView()).bindCameraListener()
  new HeaderController(new HeaderView()).bindHeaderListener()
})


