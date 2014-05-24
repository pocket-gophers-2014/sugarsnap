CookieSetter = {
  validDays: function() {
    return 7
  },
  expirationDate: function() {
    var now = new Date()
    var expirationDay = now.getDate()+this.validDays()
    var expiration = new Date(now.setDate(expirationDay)).toUTCString()
    return expiration
  },
  cookieName: function() {
    return 'sugarsnap'+('000'+Math.floor(Math.random()*99998 + 1)).slice(-5)
  },
  cookieText: function (coord) {
    var cookieText = this.cookieName()+"="+coord.toString()+"; path=/; expires="+this.expirationDate()+";"
    return cookieText
  },
  setCookie: function(coord) {
    this.readCookieCoordinates()
    document.cookie = this.cookieText(coord)
  },
  readCookieCoordinates: function() {
    var cookie = document.cookie.split(';')
    var coords = []
    for (var i = 0; i < cookie.length; i++) {
       coords.push(new Array(cookie[i].split('=')[1]))
     };
    return coords
  }
}


