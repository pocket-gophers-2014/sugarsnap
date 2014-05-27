function FirebaseController(view, geo, coordinates) {
  this.view = view;
  this.geo = geo;
  this.coordinates = coordinates;
  this.radius = 1;
  this.scrollPhotos = []

}

FirebaseController.prototype = {
  init: function(array) {
    var photos = this.extractInitialPhotos(array)
    this.appendPhotosToFeed(photos)
  },
  initInfiniteScroll: function(array) {
    this.scrollPhotos = PhotoHandler.getCachedPhotos(array)
  },
  extractInitialPhotos: function(array) {
    var initialPhotos = PhotoHandler.getFirstTenPhotos(array)
    var photoUrls = PhotoHandler.extractPhotoUrls(initialPhotos)
    return photoUrls;
  },
  appendExtraPhotosOnScrollEvent: function() {
    var extraScrollPhotos = PhotoHandler.getNextSetOfScrollPhotos(this.scrollPhotos)
    PhotoHandler.extractPhotoUrls(extraScrollPhotos)
    this.appendPhotosToFeed(extraScrollPhotos)
  },
  updatePhotoStream: function(array) {
    var photoToAppend = PhotoHandler.getLatestPhoto(array)
    SpinnerModule.removeSpinnerAnimation()
    this.view.prependNewPhoto(photoToAppend.photoUrl)
  },
  appendPhotosToFeed: function(photos) {
    for (var i = 0; i < photos.length; i++) {
      this.view.appendPhoto(photos[i])
    }
  },
  addCookiePhotos: function(array) {
    if (array.length > 0) {
      var cookiePhotos = PhotoHandler.getCookiePhotos(array)
      this.scrollPhotos = this.scrollPhotos.concat(cookiePhotos)
    }
  },
  appendCookiePhoto: function(array) {
    if (array.length > 0) {
      var photoToAppend = PhotoHandler.getLatestPhoto(array)
      this.scrollPhotos.push(photoToAppend)
    }
  }
}
