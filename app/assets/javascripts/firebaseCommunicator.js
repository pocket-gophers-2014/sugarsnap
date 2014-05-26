var FirebaseCommunicator = {
  getInitialPhotos: function(controller) {
    controller.geo.getPointsNearLoc(controller.coordinates, controller.radius, function(array) {
      controller.init(array);
      FirebaseCommunicator.addCookieFeed(controller)
      FirebaseCommunicator.setupCookieListener(controller)
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
  addCookieFeed: function(controller) {
    console.log(controller)
     var oldCoordinates = CookieController.userPreviousLocationCoordinates(controller.coordinates,controller.radius)
     console.log(oldCoordinates)
    for (var i = 0; i < oldCoordinates.length; i++) {
      console.log(oldCoordinates[i])
      controller.geo.getPointsNearLoc(oldCoordinates[i],controller.radius, function(array){
        console.log("yay firebase")
        controller.addCookiePhotos(array)})
    }
  },
  setupCookieListener: function(controller) {
    var oldCoordinates = CookieController.userPreviousLocationCoordinates(controller.coordinates,controller.radius)
    for (var i = 0; i < oldCoordinates.length; i++) {
      controller.geo.getPointsNearLoc(oldCoordinates[i],controller.radius, function(array){controller.appendCookiePhoto(array)})
    },
  getNextSetOfScrollerPhotos: function(controller) {
    // THIS NOW JUST NEEDS TO REFERENCE THE ARRAY FROM
    controller.prepareExtraPhotosForScrollEvent()

  }
}