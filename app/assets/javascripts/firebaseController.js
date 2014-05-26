function FirebaseController(view, geo, coordinates) {
  this.view = view;
  this.geo = geo;
  this.coordinates = coordinates;
  this.radius = 1;
  this.photoArray = []
}

FirebaseController.prototype = {
  init: function(array) {
    // console.log(array)
    var photos = this.extractInitialPhotos(array)
    this.appendPhotosToFeed(photos)
  },
  initInfiniteScroll: function(array) {
    var extraPhotos = this.extractInfinityPhotos(array)
    this.photoArray = extraPhotos
    // console.log(this.photoArray)
    // this.prepareExtraPhotosForScrollEvent()
  },
  extractInitialPhotos: function(array) {
    var initialPhotos = PhotoHandler.getFirstTenPhotos(array)
    var photoUrls = PhotoHandler.extractPhotoUrls(initialPhotos)
    return photoUrls;
  },
  extractInfinityPhotos: function(array) {
    var infinitePhotos = PhotoHandler.getCachedPhotos(array)
    var photoUrls = PhotoHandler.extractPhotoUrls(infinitePhotos)
    return infinitePhotos;
  },
  prepareExtraPhotosForScrollEvent: function() {
    // console.log(array);
    // var extraScrollPhotos = array.slice(0,10)
    // array.splice(0,10)
    // console.log(extraScrollPhotos)
    var extraScrollPhotos = this.photoArray.slice(0,10)
    this.photoArray.splice(0,10)
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
  }
}
