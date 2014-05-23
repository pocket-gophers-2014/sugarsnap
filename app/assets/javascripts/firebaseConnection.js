FirebaseConnection = (function() {
  var geoRef = new Firebase('https://scorching-fire-539.firebaseio.com/')
  var geo = new geoFire(geoRef)

  return {
    getGeo: function() {
      return geo
    }
  }
})()