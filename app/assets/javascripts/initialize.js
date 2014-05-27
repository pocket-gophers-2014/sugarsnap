$(document).ready(function() {
  // Gehhhh.  I don't like this global.  Pretty much any time you set one you
  // will wind up doing some weird callback insanity or making some weird
  // design decision to accommodate this.
  gCoordinates = []
  LocationUpdater.getCoordinates()

  /* I'd like to see these two things implement a commonly named method lik
   * `bindListener()`...it establishes that there's a sort of parallelism..
   */
  new CameraController(new CameraView()).bindCameraListener()
  new HeaderController(new HeaderView()).bindHeaderListener()
})


