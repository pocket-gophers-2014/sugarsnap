CookieController = {
  testNewLocation: function (newCoordinates) {
    if (DistanceCalculator.distanceBetwee(coordinates, newCoordinates) > 1) {
      return true
    } else {
      return false
    }
  }

}