SugarSnap = {
  initialize: function() {
    navigator.geolocation.getCurrentPostion(this.initializeFeed, this.errors)
  },
  getCoordinatesSuccess: function(position) {
    // SpinnerModule.renderSpinnerAnimation();
    var firebaseController = new FirebaseController(position, FirebaseConnection.getGeo())
    // var photoController = new PhotoController(new PhotoView())
    // firebaseController.subscribeListenerForInitialPhotos(photoController)
    // firebaseController.subscribeListenerForLivePhotoUpdates(photoController)
    //infinitescroll
    // new CameraController(new CameraView()).bindCameraListener.(firebaseController)
    // new HeaderController(new HeaderView()).bindHeaderListener()
    // InfiniteScroller.checkScrollThreshold( firebaseController )
    // CookieController.manageCookies( gCoordinates, firebaseController.radius )
    // SubmissionModule.listenForFileUpload()
  },
  getCoordinateFailure: function() {
    alert("We're sorry,we couldn't find you! We'll keep searching.")
    this.initialize()
  }
}