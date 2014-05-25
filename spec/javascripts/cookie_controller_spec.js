describe('CookieController', function () {
  var cookieController
  var cookieSetter
  var cookieGetter
  var newCoordinates
  beforeEach(function() {
    cookieController = CookieController
    cookieSetter = CookieSetter
    cookieGetter = CookieGetter
    newCoordinates = [37.7844234,-122.3970566]
  });
  it('is defined', function() {
    expect(cookieController).toBeDefined();
  });
  it('has a function newLocation', function() {
    expect(cookieController.newLocation).toBeDefined();
  });
  it('detects when a new location cookie should be added', function() {
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
    var mock = new MockCookie();
    mock.cookie = 'sugarsnap12345=37.7844234,-122.3970566';
    expect()
  });



  // describe('CookieSetter', function() {
  //   it('is defined', function() {
  //     expect(cookieSetter).toBeDefined();
  //   });
  // });
  // describe('CookieGetter', function() {
  //   it('is defined', function() {
  //     expect(cookieGetter).toBeDefined();
  //   });
  // });
});