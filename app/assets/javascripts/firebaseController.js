function FirebaseController(view, geo, coordinates) {
  this.view = view;
  this.geo = geo;
  this.coordinates = coordinates;
  this.radius = 1;
}

FirebaseController.prototype = {
  init: function(array) {
    console.log(array)
    var photos = this.extractPhotos(array)
    for (var i = 0; i < photos.length; i++) {
      this.view.appendPhoto(photos[i])
    }
  },
  extractPhotos: function(array) {
    var initialPhotos = PhotoHandler.getFirstTenPhotos(array)
    var photoUrls = PhotoHandler.extractPhotoUrls(initialPhotos)
    return photoUrls;
  }
}
