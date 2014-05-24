var cookieMonster = function () {
  this.userCookie = document.cookie
  this.validDays = 7
}

cookieMonster.prototype = {
  expirationDate: function() {
    var now = new Date()
    var expirationDay = now.getDay()+this.validDays
    var expiration = new Date(now.setDate(expirationDay)).toUTCString()
    console.log(expiration)
    return expiration
  },
  cookieText: function (coord) {
    var cookieText = "locations="+coord.toString()+'; expires='+this.expirationDate()+"; path=''"
    console.log(cookieText)
    return cookieText
  },
  setCookie: function(coord) {
    console.log(this.userCookie)
    this.userCookie = this.cookieText(coord)
  }
}