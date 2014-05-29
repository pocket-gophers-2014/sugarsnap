var FirebaseCommunicator = {
  getInitialPhotos: function(firebaseController, photoController) {
    var geo = firebaseController.geo
    geo.getPointsNearLoc([firebaseController.latitude, firebaseController.longitude], firebaseController.radius, function(photoArray) {
        photoController.initializeFeed(photoArray);
        FirebaseCommunicator.setupCookieListenerAndAddCookieFeed(firebaseController, photoController)
        photoController.initializeInfiniteScroll(photoArray);
      }
    )
  },
  getLivePhotoUpdate: function(firebaseController, photoController) {
    var geo = firebaseController.geo
    geo.onPointsNearLoc([firebaseController.latitude, firebaseController.longitude], firebaseController.radius, function(photoArray) { photoController.updatePhotoFeed(photoArray) }
    )
  },
  sendPhotoUrlToFirebase: function(firebaseController, photoUrl) {
    var geo = firebaseController.geo;
    var timeStamp = Date.now();
    var userPosition = [firebaseController.latitude, firebaseController.longitude];
    photoObject = { photoUrl: photoUrl, createdAt: timeStamp }
    geo.insertByLoc(userPosition, photoObject)
  },
  setupCookieListenerAndAddCookieFeed: function(firebaseController, photoController) {
    var oldCoordinates = CookieController.userPreviousLocationCoordinates([firebaseController.latitude, firebaseController.longitude],firebaseController.radius)
    for (var i = 0; i < oldCoordinates.length; i++) {
      var geo = firebaseController.geo
      geo.getPointsNearLoc(oldCoordinates[i],firebaseController.radius, function(photoArray) {
        photoController.addPhotosFromCookieLocations(photoArray)
      })
    }
  }
}