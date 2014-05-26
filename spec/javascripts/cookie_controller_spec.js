describe('CookieController', function () {
  var cookieController
  var cookieSetter
  var cookieGetter
  var newCoordinates
  function MockCookie() {
    this.str = '';
    this.__defineGetter__('cookie', function() {
      return this.str;
    });
    this.__defineSetter__('cookie', function(s) {
      this.str += (this.str ? ';' : '') + s;
      return this.str;
    });
  }
  beforeEach(function() {
    cookieController = CookieController
    cookieSetter = CookieSetter
    cookieGetter = CookieGetter
    newCoordinates = [50.7844234,-112.3970566]
  });
  it('is defined', function() {
    expect(cookieController).toBeDefined();
  });
  it('has a function noCookie', function() {
    expect(cookieController.noCookie).toBeDefined();
  });
  it('detects a cookie when it exists', function() {
    var mock = new MockCookie()
    mock.cookie = 'sugarsnap12345=37.7844234,-122.3970566'
    expect(cookieController.noCookie(mock)).toEqual(false)
  });
  it('detects no cookie when none exists', function() {
    var mock = new MockCookie()
    expect(cookieController.noCookie(mock)).toEqual(true)
  });
  it('has a function newLocation', function() {
    expect(cookieController.newLocation).toBeDefined();
  });
  it('detects a new location', function() {
    spyOn(CookieGetter, 'getOldCookies').and.returnValue(['sugarsnap12345=37.7844234,-122.3970566'])
    expect(cookieController.newLocation(newCoordinates,1)).toBe(true)
  });
  it('has a function userPreviousLocationCoordinates', function() {
    expect(cookieController.userPreviousLocationCoordinates).toBeDefined();
  });
  it('returns all previous locations that do not overlap with the current area', function() {
    spyOn(CookieGetter, 'getOldCookies').and.returnValue(['sugarsnap12345=37.7844234,-122.3970566'])
    expect(cookieController.userPreviousLocationCoordinates(newCoordinates,1)).toEqual([[37.7844234,-122.3970566]])
  });
  it('has a function manageCookies', function() {
    expect(cookieController.manageCookies).toBeDefined();
  });
  it("sets a new cookie if the user's subscription radius does not overlap with any other cookie's", function() {
    spyOn(cookieController, 'noCookie').and.returnValue(true)
    spyOn(cookieSetter, 'setCookie')
    cookieController.manageCookies(newCoordinates, 1)
    expect(cookieSetter.setCookie).toHaveBeenCalled()
  });
});