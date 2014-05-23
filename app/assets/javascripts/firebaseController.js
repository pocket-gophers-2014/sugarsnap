function FirebaseController(view, geo, coordinates) {
  this.view = view;
  this.geo = geo;
  this.coordinates = coordinates;
  this.neat = []
  this.radius = 1;
}

FirebaseController.prototype = {
  init: function(array) {
    console.log(array)

  }
}