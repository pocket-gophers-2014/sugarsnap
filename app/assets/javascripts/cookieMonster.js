var cookieMonster = function () {
  this.userCookie = document.cookie
  this.validDays = 7
}

cookieMonster.prototype = {
  expirationDate: function() {
    var now = new Date()
    var expirationDay = now.getDate()+this.validDays
    var expiration = new Date(now.setDate(expirationDay)).toUTCString()
    return expiration
  },
  cookieText: function (coord) {
    console.log(this.expirationDate())
    var cookieText = this.cookieName()+"="+cogord.toString()+"; path=/; expires="+this.expirationDate()+";"
    console.log(cookieText)
    return cookieText
  },
  cookieName: function() {
    return 'sugarsnap'+('000'+Math.floor(Math.random()*99998 + 1)).slice(-5)
  },
  setCookie: function(coord) {
    console.log(this.cookieText(coord))
    document.cookie = this.cookieText(coord)
  }
}


