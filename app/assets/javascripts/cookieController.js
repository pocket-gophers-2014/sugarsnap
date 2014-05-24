function CookieController() {
  this.validDays = 7
}

CookieController.prototype = {
  noCookie: function() {
    return document.cookie == ""
  },
  manageCookies: function(newCoordinates) {
    if (this.noCookie() || this.newLocation(newCoordinates)){
      CookieSetter.setCookie(newCoordinates)
    }
  },
  newLocation: function (newCoordinates) {
    var oldLocations = CookieGetter.getCoordinatePairsfromCookies()
    var newLocation = true // defualt
    if (oldLocations) {
      for (var i = 0; i < oldLocations.length; i++) {
        if (DistanceCalculator.distanceBetween(newCoordinates, oldLocations[i]) < 1) {
          var newLocation = false
        }
      };
    }
    return newLocation
  }
}