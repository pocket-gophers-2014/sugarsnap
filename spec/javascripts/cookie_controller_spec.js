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
    expect(cookieController.newLocation).toBeDefined();
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