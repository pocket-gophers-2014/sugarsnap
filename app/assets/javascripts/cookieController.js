CookieController = {
  validDays: function() {
    return 7 //constant set here
  },
  noCookie: function(windowObj) {
    return windowObj.cookie === ""
  },
  manageCookies: function(newCoordinates, radius) {
    if (this.noCookie(document) || this.newLocation(newCoordinates, radius)) {
      CookieSetter.setCookie(newCoordinates, this.validDays())
    }
  },
  newLocation: function (newCoordinates, radius) {
    var oldLocations = CookieGetter.getCoordinatePairsfromCookies()
    var newLocation = true
    if (oldLocations) {
      for (var i = 0; i < oldLocations.length; i++) {
        if (DistanceCalculator.distanceBetween(newCoordinates, oldLocations[i]) < radius*2) {
          newLocation = false
        }
      };
    }
    return newLocation
  },
  userPreviousLocationCoordinates: function(newCoordinates, radius) {
    var oldLocations = CookieGetter.getCoordinatePairsfromCookies()
    var locations = []
    if (!this.noCookie(document) && oldLocations) {
      for (var i = 0; i < oldLocations.length; i++) {
        if (DistanceCalculator.distanceBetween(newCoordinates, oldLocations[i]) > radius*2) {
          locations.push(oldLocations[i])
        }
      };
      return locations
    }
  }
}
