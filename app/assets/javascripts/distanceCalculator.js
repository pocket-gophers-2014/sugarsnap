DistanceCalculator = {
  distanceBetween: function (coordinates1, coordinates2) {
    // Haversine formula uses toRad() defined on Number
    var lat1 = coordinates1[0]
    var lat2 = coordinates2[0]
    var lon1 = coordinates1[1]
    var lon2 = coordinates2[1]

    var R = 6371; // km
    var φ1 = lat1.toRad();
    var φ2 = lat2.toRad();
    var Δφ = (lat2-lat1).toRad();
    var Δλ = (lon2-lon1).toRad();

    var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
    Math.cos(φ1) * Math.cos(φ2) *
    Math.sin(Δλ/2) * Math.sin(Δλ/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

    var d = R * c;
    return d
  }
}