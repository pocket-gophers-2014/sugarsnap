
SugarSnap = {
  initialize: function() {
    navigator.geolocation.getCurrentPosition( function(position) {SugarSnap.getCoordinatesSuccess(position, InfiniteScroller)} , this.getCoordinatesFailure.bind(this))
  },
  getCoordinatesSuccess: function(position, scroller) {
    debugger
    SpinnerModule.renderSpinnerAnimation();
    var firebaseController = new FirebaseController(position, FirebaseConnection.getGeo())
    var photoController = new PhotoController(new PhotoView())
    firebaseController.subscribeListenerForInitialPhotos(photoController)
    firebaseController.subscribeListenerForLivePhotoUpdates(photoController)
    new CameraController(new CameraView()).bindCameraListener(firebaseController)
    new HeaderController(new HeaderView()).bindHeaderListener()
    scroller.checkScrollThreshold( photoController )
    CookieController.manageCookies( [firebaseController.latitude, firebaseController.longitude], firebaseController.radius )
    SubmissionModule.listenForFileUpload()
  },
  getCoordinatesFailure: function() {
    alert("We're sorry,we couldn't find you! We'll keep searching.")
    this.initialize()
  }
}

