var CookieSetter = function() {
  this.expirationDays = 1
  this.userCookie = document.cookie
}

CookieSetter.prototype = {
  setLocationCookie: function() {
    var cookieText = "{location:}"+'; expires='+this.expiration+"; path=''"
    this.userCookie = cookieText
  },
  expiration: function() {
    var now = new Date()
    var validPeriod = now.getDays()+this.expirationDays
    var expirationDate = new Date(now.setDays(validPeriod)).toUTCString()
    return expirationDate
  },
  locationCookieText: function() {
    return this.userCookie.split(';')[0]
  }
}
