/* Whoa, nice singleton pattern and use of IIFE.  exactly the right solution.*/

FirebaseConnection = (function() {
  // I feel like this URL should be coming in via templates and be set in 
  // a rails-land ENV value.
  var geoRef = new Firebase('https://scorching-fire-539.firebaseio.com/')
  var geo = new geoFire(geoRef)

  return {
    getGeo: function() {
      return geo
    }
  }
})()
