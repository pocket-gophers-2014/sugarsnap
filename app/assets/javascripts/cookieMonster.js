CookieSetter = {
  validDays: function() {
    return 7
  },
  expirationDate: function(days) {
    var now = new Date()
    var expirationDay = now.getDate()+days
    var expiration = new Date(now.setDate(expirationDay)).toUTCString()
    return expiration
  },
  cookieName: function() {
    return 'sugarsnap'+('000'+Math.floor(Math.random()*99998 + 1)).slice(-5)
  },
  cookieText: function (coord, days) {
    var cookieText = this.cookieName()+"="+coord.toString()+"; path=/; expires="+this.expirationDate(days)+";"
    return cookieText
  },
  setCookie: function(coord, days) {
    document.cookie = this.cookieText(coord, days)
  },
  readCookieCoordinates: function() {
    var cookie = document.cookie
    var oldCookies = []
    if (cookie !== ""){
      oldCookies = cookie.split(';')
    }
    var coords = []
    for (var i = 0; i < oldCookies.length; i++) {
       coords.push(new Array(oldCookies[i].split('=')[1]))
     };
    return coords
  }
}


