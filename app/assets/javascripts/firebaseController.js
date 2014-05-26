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
    var extraPhotos = this.extractInfinityPhotos(array)
    this.scrollPhotos = extraPhotos
  },
  extractInitialPhotos: function(array) {
    var initialPhotos = PhotoHandler.getFirstTenPhotos(array)
    var photoUrls = PhotoHandler.extractPhotoUrls(initialPhotos)
    return photoUrls;
  },
  extractInfinityPhotos: function(array) {
    var infinitePhotos = PhotoHandler.getCachedPhotos(array)
    return infinitePhotos;
  },
  prepareExtraPhotosForScrollEvent: function() {
    PhotoHandler.sortByTimeCreated(this.scrollPhotos)
    var extraScrollPhotos = this.scrollPhotos.slice(0,10)
    this.scrollPhotos.splice(0,10)
    PhotoHandler.extractPhotoUrls(extraScrollPhotos)
    this.appendPhotosToFeed(extraScrollPhotos)
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
