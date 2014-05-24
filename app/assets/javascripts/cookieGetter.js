cookieGetter = {
  cookieExists: function() {
    return document.cookie !== ""
  },
  splitCookie: function() {
    document.cookie.split(';')
  },
  getOldCookies: function() {
    if (this.cookieExists()){
      return this.splitCookies()
    }
  }
}




getCookieCoordinates: function() {
    var coords = []
    for (var i = 0; i < oldCookies.length; i++) {
      var location = oldCookies[i].split('=')[1]
      location.split(',')


        for (var i = 0; i < location.length; i++) {
          parseFloat(location[i])
        };
        debugger
        coords.push( location )
     };
   },