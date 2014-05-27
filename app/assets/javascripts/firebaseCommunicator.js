var FirebaseCommunicator = {
  getInitialPhotos: function(controller) {
    controller.geo.getPointsNearLoc(controller.coordinates, controller.radius, function(array) {
      controller.init(array);
      FirebaseCommunicator.setupCookieListenerAndAddCookieFeed(controller)
      controller.initInfiniteScroll(array);
    })
  },
  addAutomaticUpdateToUserCoordinates: function(controller) {
    controller.geo.onPointsNearLoc(controller.coordinates, controller.radius, function(array) {
      controller.updatePhotoStream(array);
    })
  },
  sendImageToFirebase: function(url) {
    var geo = FirebaseConnection.getGeo()
    var timeStamp = Date.now()
    //uses global var (will break function if called instantly)
    // m..hm...... global var causing Ragnarok
    var userPosition = gCoordinates
    photoObject = { photoUrl: url, createdAt: timeStamp }
    geo.insertByLoc(userPosition, photoObject)
  },
  setupCookieListenerAndAddCookieFeed: function(controller) {
    var oldCoordinates = CookieController.userPreviousLocationCoordinates(controller.coordinates,controller.radius)
    for (var i = 0; i < oldCoordinates.length; i++) {
      controller.geo.getPointsNearLoc(oldCoordinates[i],controller.radius, function(array) {
        controller.addPhotosFromCookieLocations(array)
        controller.appendPhotoFromCookieLocation(array)
      })
    }
  }
}
