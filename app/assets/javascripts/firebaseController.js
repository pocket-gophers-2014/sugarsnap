function FirebaseController(view, geo, coordinates) {
  this.view = view;
  this.geo = geo;
  this.coordinates = coordinates;
  this.radius = 1;
  this.photos = []
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
    var photoToAppend = PhotoHandler.getLatestPhoto(array)
    this.view.removePendingLoadAnimation()
    this.view.prependNewPhoto(photoToAppend.photoUrl)
  },
  appendPhotosToFeed: function(photos) {
    for (var i = 0; i < photos.length; i++) {
      this.view.appendPhoto(photos[i])
    }
  },
  addCookiePhotos: function(array) {
    console.log("hacking bs soon")
  },
  appendCookiePhoto: function(array) {
    if (array.length > 0){
    var photoToAppend = PhotoHandler.getLatestPhoto(array)
    this.view.prependNewPhoto(photoToAppend.photoUrl)
    }
  }
}
