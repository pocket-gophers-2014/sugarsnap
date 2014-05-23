function FirebaseController(view, geo, coordinates) {
  this.view = view;
  this.geo = geo;
  this.coordinates = coordinates;
  this.photos = []
  this.radius = 1;
}

FirebaseController.prototype = {
  init: function(array) {
    //cut it down by last 10 based on timestamp!
    this.photos = PhotoHandler.extractPhotos(array)
    for (var i = 0; i < this.photos.length; i++) {
      this.view.appendPhoto(this.photos[i])
    }
  }
}
