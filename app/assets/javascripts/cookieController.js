CookieController = {
  validDays: function() {
    return 7 //cookie period set here
  },
  noCookie: function() {
    return document.cookie === ""
  },
  manageCookies: function(newCoordinates, radius) {
    if (this.noCookie() || this.newLocation(newCoordinates, radius)) {
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
    if (!this.noCookie() && oldLocations) {
      for (var i = 0; i < oldLocations.length; i++) {
        if (DistanceCalculator.distanceBetween(newCoordinates, oldLocations[i]) > radius*2) {
          locations.push(oldLocations[i])
        }
      };
      return locations
    }
  }
}