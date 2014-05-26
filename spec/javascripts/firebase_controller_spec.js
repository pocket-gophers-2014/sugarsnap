describe('FirebaseController', function() {
  var view;
  var geo;
  var coordinates;
  var testFirebaseController;
  var testArray;
  beforeEach(function() {
    view = new FirebaseView()
    geo = 0
    coordinates = 0
    testFirebaseController = new FirebaseController(view,geo,coordinates)
    testArray = [{photoUrl:'url',createdAt:0},{photoUrl:'url2',createdAt:1}]
    testInfinityArray = [{photoUrl:'url',createdAt:0},{photoUrl:'url2',createdAt:1},{photoUrl:'url3',createdAt:2},{photoUrl:'url4',createdAt:3}]
  })
  it('has a function init defined', function() {
    expect(testFirebaseController.init).toBeDefined()
  });
  it('has a function initInfiniteScroll defined', function() {
    expect(testFirebaseController.initInfiniteScroll).toBeDefined()
  });
  it('has a function extractInitialPhotos defined', function() {
    expect(testFirebaseController.extractInitialPhotos).toBeDefined()
  });
  it('has a function prepareExtraPhotosForScrollEvent defined', function() {
    expect(testFirebaseController.prepareExtraPhotosForScrollEvent).toBeDefined()
  });
  it('has a function updatePhotoStream defined', function() {
    expect(testFirebaseController.updatePhotoStream).toBeDefined()
  });
  it('has a function appendPhotosToFeed defined', function() {
    expect(testFirebaseController.appendPhotosToFeed).toBeDefined()
  });
  it('has a function addCookiePhotos defined', function() {
    expect(testFirebaseController.addCookiePhotos).toBeDefined()
  });
  it('has a function appendCookiePhoto defined', function() {
    expect(testFirebaseController.appendCookiePhoto).toBeDefined()
  });
  describe('init', function() {
    it('calls appendPhotosToFeed', function() {
      spyOn(testFirebaseController, 'appendPhotosToFeed')
      spyOn(testFirebaseController, 'extractInitialPhotos')
      testFirebaseController.init()
      expect(testFirebaseController.appendPhotosToFeed).toHaveBeenCalled()
    })
    it('calls extractInitialPhotos', function() {
      spyOn(testFirebaseController, 'appendPhotosToFeed')
      spyOn(testFirebaseController, 'extractInitialPhotos')
      testFirebaseController.init()
      expect(testFirebaseController.extractInitialPhotos).toHaveBeenCalled()
    })
  })
  describe('extractInitialPhotos', function() {
    it('calls PhotoHandler.getFirstTenPhotos', function() {
      spyOn(PhotoHandler, 'getFirstTenPhotos')
      spyOn(PhotoHandler, 'extractPhotoUrls')
      testFirebaseController.extractInitialPhotos(testArray)
      expect(PhotoHandler.getFirstTenPhotos).toHaveBeenCalled()
    });
    it('calls PhotoHandler.extractInitialPhotos', function() {
      spyOn(PhotoHandler, 'getFirstTenPhotos')
      spyOn(PhotoHandler, 'extractPhotoUrls')
      testFirebaseController.extractInitialPhotos(testArray)
      expect(PhotoHandler.extractPhotoUrls).toHaveBeenCalled
    });
    it('returns an array of photo urls from array of photo objects after sorting and slicing the array in the photoExtractor module', function() {
      expect(testFirebaseController.extractInitialPhotos(testArray)).toEqual(['url'])
    });
  });
  describe('initInfiniteScroll', function() {
    it('calls extractInfinityPhotos', function() {
      spyOn(PhotoHandler, 'getCachedPhotos')
      testFirebaseController.initInfiniteScroll()
      expect(PhotoHandler.getCachedPhotos).toHaveBeenCalled()
    });
    it('assigns the returned array from extractInfinityPhotos to the controller\'s scrollPhotos array', function() {
      spyOn(PhotoHandler, 'getCachedPhotos').and.returnValue(testInfinityArray)
      testFirebaseController.initInfiniteScroll()
      expect(testFirebaseController.scrollPhotos).toEqual(testInfinityArray)
    });
  });
  describe('prepareExtraPhotosForScrollEvent', function() {
    spyOn(PhotoHandler)
  })

  // describe('updatePhotoStream', function(){
  //   it('calls prependNewPhoto', function() {
  //     var testArray = [0]
  //     spyOn(testFirebaseController, 'testFirebaseController.view.appendPhoto')
  //     testFirebaseController.appendPhotosToFeed(testArray)
  //     expect(testFirebaseController.view.appendPhoto).toHaveBeenCalled()
  //   })
  // })

})
