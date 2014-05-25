var FirebaseCommunicator = {
  getInitialPhotos: function(controller) {
    controller.geo.onPointsNearLoc(controller.coordinates, controller.radius, function(array) {
      controller.init(array);
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
  updateCoordinateListener: function() {
    firebaseController.geo.offPointsNearLoc(firebaseController.coordinates, firebaseController.radius)
    FirebaseCommunicator.addNewListener()
  },
  addNewListener: function() {
    firebaseController.geo.onPointsNearLoc(coordinates, firebaseController.radius, function(array) {
    firebaseController.updatePhotoStream(array);
    })
  }
}