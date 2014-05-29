var FirebaseCommunicator = {
  getInitialPhotos: function(firebaseController, photoController) {
    var geo = firebaseController.geo
    geo.getPointsNearLoc([firebaseController.latitude, firebaseController.longitude], firebaseController.radius, function(photoArray) {
        photoController.initializeFeed(photoArray);
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
  }
}