SugarSnap = {
  initialize: function() {
    navigator.geolocation.getCurrentPosition(this.getCoordinatesSuccess, this.getCoordinatesFailure.bind(this))
  },
  getCoordinatesSuccess: function(position) {
    SpinnerModule.renderSpinnerAnimation();
    var firebaseController = new FirebaseController(position, FirebaseConnection.getGeo())
    var photoController = new PhotoController(new PhotoView())
    firebaseController.subscribeListenerForInitialPhotos(photoController)
    firebaseController.subscribeListenerForLivePhotoUpdates(photoController)
    new CameraController(new CameraView()).bindCameraListener(firebaseController)
    new HeaderController(new HeaderView()).bindHeaderListener()
    InfiniteScroller.checkScrollThreshold( photoController )
    CookieController.manageCookies( [firebaseController.latitude, firebaseController.longitude], firebaseController.radius )
    SubmissionModule.listenForFileUpload()
  },
  getCoordinateFailure: function() {
    alert("We're sorry,we couldn't find you! We'll keep searching.")
    this.initialize()
  }
}