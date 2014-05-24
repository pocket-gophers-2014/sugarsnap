function CookieController() {
  this.validDays = 7
}

CookieController.prototype = {
  manageCookies: function(newCoordinates) {
    if (this.newLocation(newCoordinates)){
      CookieSetter.setCookie(newCoordinates)
    }
  },
  newLocation: function (newCoordinates) {
    var oldLocations = CookieSetter.readCookieCoordinates()

    var newLocation = true
    if (oldLocations) {
      for (var i = 0; i < oldLocations.length; i++) {
        if (DistanceCalculator.distanceBetween(newCoordinates, oldLocations[i]) < 1) {
          newLocation = false
        }
      };
    }
    return newLocation
  }
}