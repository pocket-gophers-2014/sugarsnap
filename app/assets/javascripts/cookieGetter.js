CookieGetter = {
  getOldCookies: function() {
    return document.cookie.split(';')
  },
  getCoordinateStringsFromCookies: function() {
    var oldCookies = this.getOldCookies()
    for (var i = 0; i < oldCookies.length; i++) {
      oldCookies[i] = oldCookies[i].split('=')[1]
    };
    return oldCookies
  },
  splitCoordinateStringIntoNumbers: function() {
    var coordinatePairs = this.getCoordinateStringsFromCookies()
    for (var i = 0; i < coordinatePairs.length; i++) {
      coordinatePairs[i] = coordinatePairs[i].split(',')
    };
    return coordinatePairs
  },
  getCoordinatePairsfromCookies: function() {
    var coordinateFloats = this.splitCoordinateStringIntoNumbers()
    for (var i = 0; i < coordinateFloats.length; i++) {
      for (var j = 0; j < coordinateFloats[i].length; j++) {
        coordinateFloats[i][j] = parseFloat(coordinateFloats[i][j])
      };
    };
    return coordinateFloats
  }
}

