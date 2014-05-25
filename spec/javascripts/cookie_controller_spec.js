describe('CookieController', function() {
  var cookieController;
  var cookieSetter;
  var cookieGetter;
  beforeEach(function() {
    cookieController =  CookieController
    cookieSetter = CookieSetter
    cookieGetter = CookieGetter
  })
  it('is defined', function() {
    expect(cookieController).toBeDefined();
  });
  it('is defined', function() {
    expect(cookieController).toBeDefined();
  });
  describe('CookieSetter', function() {
    it('is defined', function() {
      expect(cookieSetter).toBeDefined();
    })
  })
  describe('CookieGetter', function() {
    it('is defined', function() {
      expect(cookieGetter).toBeDefined();
    })
  })
})