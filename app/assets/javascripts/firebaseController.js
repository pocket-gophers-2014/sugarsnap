function FirebaseController(view, geo, coordinates) {
  this.view = view;
  this.geo = geo;
  this.coordinates = coordinates;
  this.radius = 1;
}

FirebaseController.prototype = {
  init: function(array) {
    console.log(array)
    var photos = this.extractInitialPhotos(array)
    this.appendPhotosToFeed(photos)
  },
  extractInitialPhotos: function(array) {
    var initialPhotos = PhotoHandler.getFirstTenPhotos(array)
    var photoUrls = PhotoHandler.extractPhotoUrls(initialPhotos)
    return photoUrls;
  },
  updatePhotoStream: function(array) {
    var photoToAppend = PhotoHandler.getLatestPhoto(array)
    var photoUrl = PhotoHandler.extractPhotoUrls(photoToAppend)
    this.view.prependNewPhoto(photoUrl[0])
  },
  appendPhotosToFeed: function(photos) {
    for (var i = 0; i < photos.length; i++) {
      this.view.appendPhoto(photos[i])
    }
  },
}
