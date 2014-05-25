function FirebaseController(view, geo, coordinates) {
  this.view = view;
  this.geo = geo;
  this.coordinates = coordinates;
  this.radius = 1;
  this.updatedLocation = true
}

FirebaseController.prototype = {
  init: function(array) {
    var photos = this.extractInitialPhotos(array)
    this.appendPhotosToFeed(photos)
  },
  extractInitialPhotos: function(array) {
    var initialPhotos = PhotoHandler.getFirstTenPhotos(array)
    var photoUrls = PhotoHandler.extractPhotoUrls(initialPhotos)
    return photoUrls;
  },
  updatePhotoStream: function(array) {
    if (this.updatedLocation) {
      var photoToAppend = PhotoHandler.getLatestPhoto(array)
      this.view.removePendingLoadAnimation()
      this.view.prependNewPhoto(photoToAppend.photoUrl)
    } else {
      this.updatedLocation = true
      this.coordinates = coordinates
      console.log("updated coordinates")
    }
  },
  appendPhotosToFeed: function(photos) {
    for (var i = 0; i < photos.length; i++) {
      this.view.appendPhoto(photos[i])
    }
  },
  locationChanged: function() {
    this.updatedLocation = false
  }

}
