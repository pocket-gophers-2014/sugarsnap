CookieSetter = {
  expirationDate: function(days) {
    var now = new Date()
    var expirationDay = now.getDate()+days
    var expiration = new Date(now.setDate(expirationDay)).toUTCString()
    return expiration
  },
  cookieName: function() {
    //generates random name to avoid overwriting old cookies
    return 'sugarsnap'+('0000'+Math.floor(Math.random()*99998 + 1)).slice(-5)
  },
  cookieText: function (coord, days) {
    var cookieText = this.cookieName()+"="+coord.toString()+"; path=/; expires="+this.expirationDate(days)+";"
    return cookieText
  },
  setCookie: function(coord, days) {
    document.cookie = this.cookieText(coord, days)
  }
}


