var FirebaseCommunicator = {
  getInitialPhotos: function(controller) {
    controller.geo.getPointsNearLoc(controller.coordinates, controller.radius, function(array) {
      controller.init(array);
      controller.initInfiniteScroll(array);
    })
  },
  addAutomaticUpdate: function(controller) {
    controller.geo.onPointsNearLoc(controller.coordinates, controller.radius, function(array) {
      controller.updatePhotoStream(array);
    })
  },
  sendImageToFirebase: function(url) {
    var geo = FirebaseConnection.getGeo()
    var timeStamp = Date.now()
    //uses global var (will break function if called instantly)
    var userPosition = coordinates
    photoObject = { photoUrl: url, createdAt: timeStamp }
    geo.insertByLoc(userPosition, photoObject)
  },
  getNextSetOfScrollerPhotos: function(controller) {
    // THIS NOW JUST NEEDS TO REFERENCE THE ARRAY FROM
    controller.prepareExtraPhotosForScrollEvent()
  }
}