var FirebaseCommunicator = {
  getInitialPhotos: function(controller) {
    controller.geo.getPointsNearLoc(controller.coordinates, controller.radius, function(array) {
      controller.init(array);
    })
  }
}