CookieController = {
  validDays: function() {
    return 7 //constant set here
  },
  noCookie: function() {
    return document.cookie == ""
  },
  manageCookies: function(newCoordinates, radius) {
    if (this.noCookie() || this.newLocation(newCoordinates, radius)){
      CookieSetter.setCookie(newCoordinates, this.validDays())
    }
  },
  newLocation: function (newCoordinates, radius) {
    var oldLocations = CookieGetter.getCoordinatePairsfromCookies()
    var newLocation = true
    if (oldLocations) {
      for (var i = 0; i < oldLocations.length; i++) {
        if (DistanceCalculator.distanceBetween(newCoordinates, oldLocations[i]) < radius) {
          var newLocation = false
        }
      };
    }
    return newLocation
  }
}