describe('FirebaseController', function() {
  var view;
  var geo;
  var coordinates;
  var testFirebaseController;
  var testArray;
  var testInfinityArray;
  var testPhotoObject;
  beforeEach(function() {
    view = new FirebaseView()
    geo = 0
    coordinates = 0
    testFirebaseController = new FirebaseController(view,geo,coordinates)
    testFirebaseController.scrollPhotos = []
    testArray = [{photoUrl:'url',createdAt: 0},{photoUrl:'url2',createdAt: 1}]
    testInfinityArray = [{photoUrl:'url',createdAt: 0},{photoUrl:'url2',createdAt: 1},{photoUrl:'url3',createdAt: 2},{photoUrl:'url4',createdAt: 3}]
    testPhotoObject = { photoUrl: 'url', createdAt: 5 }
    emptyTestArray = []
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
  it('has a function appendExtraPhotosOnScrollEvent defined', function() {
    expect(testFirebaseController.appendExtraPhotosOnScrollEvent).toBeDefined()
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
  describe('appendExtraPhotosOnScrollEvent', function() {
    it('calls PhotoHandler.getNextSetOfScrollPhotos', function() {
      spyOn(PhotoHandler, 'getNextSetOfScrollPhotos')
      spyOn(PhotoHandler, 'extractPhotoUrls')
      spyOn(testFirebaseController, 'appendPhotosToFeed')
      testFirebaseController.appendExtraPhotosOnScrollEvent()
      expect(PhotoHandler.getNextSetOfScrollPhotos).toHaveBeenCalled()
    });
    it('calls PhotoHandler.extractPhotoUrls', function() {
      spyOn(PhotoHandler, 'getNextSetOfScrollPhotos')
      spyOn(PhotoHandler, 'extractPhotoUrls')
      spyOn(testFirebaseController, 'appendPhotosToFeed')
      testFirebaseController.appendExtraPhotosOnScrollEvent()
      expect(PhotoHandler.extractPhotoUrls).toHaveBeenCalled()
    });
    it('calls appendPhotosToFeed', function() {
      spyOn(PhotoHandler, 'getNextSetOfScrollPhotos')
      spyOn(PhotoHandler, 'extractPhotoUrls')
      spyOn(testFirebaseController, 'appendPhotosToFeed')
      testFirebaseController.appendExtraPhotosOnScrollEvent()
      expect(testFirebaseController.appendPhotosToFeed).toHaveBeenCalled()
    });
  });
  describe('updatePhotoStream', function() {
    it('calls PhotoHandler.updatePhotoStream', function() {
      spyOn(PhotoHandler, 'getLatestPhoto').and.returnValue(testPhotoObject)
      spyOn(testFirebaseController.view, 'removePendingLoadAnimation')
      spyOn(testFirebaseController.view, 'prependNewPhoto')
      testFirebaseController.updatePhotoStream()
      expect(PhotoHandler.getLatestPhoto).toHaveBeenCalled()
    });
    it('calls the view removePendingLoadAnimation function', function() {
      spyOn(PhotoHandler, 'getLatestPhoto').and.returnValue(testPhotoObject)
      spyOn(testFirebaseController.view, 'removePendingLoadAnimation')
      spyOn(testFirebaseController.view, 'prependNewPhoto')
      testFirebaseController.updatePhotoStream()
      expect(testFirebaseController.view.removePendingLoadAnimation).toHaveBeenCalled()
    });
    it('calls the view prependNewPhoto function', function() {
      spyOn(PhotoHandler, 'getLatestPhoto').and.returnValue(testPhotoObject)
      spyOn(testFirebaseController.view, 'removePendingLoadAnimation')
      spyOn(testFirebaseController.view, 'prependNewPhoto')
      testFirebaseController.updatePhotoStream()
      expect(testFirebaseController.view.prependNewPhoto).toHaveBeenCalled()
    });
  });
  describe('appendPhotosToFeed', function() {
    it('calls the view to appendPhoto', function() {
      spyOn(testFirebaseController.view, 'appendPhoto')
      testFirebaseController.appendPhotosToFeed(testArray)
      expect(testFirebaseController.view.appendPhoto).toHaveBeenCalled()
    });
  });
  describe('addCookiePhotos', function() {
    it('calls PhotoHandler.getCookiePhotos', function() {
      spyOn(PhotoHandler, 'getCookiePhotos')
      spyOn(testFirebaseController.scrollPhotos, 'concat')
      testFirebaseController.addCookiePhotos(testArray)
      expect(PhotoHandler.getCookiePhotos).toHaveBeenCalled()
    });
    it('calls concat to change testFirebaseController.scrollPhotos', function() {
      spyOn(PhotoHandler, 'getCookiePhotos')
      spyOn(testFirebaseController.scrollPhotos, 'concat').and.returnValue(testArray)
      testFirebaseController.addCookiePhotos(testArray)
      expect(testFirebaseController.scrollPhotos).toEqual(testArray)
    });
    it('does not call PhotoHandler.getCookiePhotos if argument array is empty', function() {
      spyOn(PhotoHandler, 'getCookiePhotos')
      spyOn(testFirebaseController.scrollPhotos, 'concat')
      testFirebaseController.addCookiePhotos(emptyTestArray)
      expect(PhotoHandler.getCookiePhotos).not.toHaveBeenCalled()
    });
    it('does not call concat to change testFirebaseController.scrollPhotos if argument array is empty', function() {
      spyOn(PhotoHandler, 'getCookiePhotos')
      spyOn(testFirebaseController.scrollPhotos, 'concat')
      testFirebaseController.addCookiePhotos(emptyTestArray)
      expect(testFirebaseController.scrollPhotos.concat).not.toHaveBeenCalled()
    });
  });
  describe('appendCookiePhoto', function() {
    it('calls PhotoHandler.getLatestPhoto', function() {
      spyOn(PhotoHandler, 'getLatestPhoto')
      spyOn(testFirebaseController.scrollPhotos, 'push')
      testFirebaseController.appendCookiePhoto(testArray)
      expect(PhotoHandler.getLatestPhoto).toHaveBeenCalled()
    });
    it('calls push to change testFirebaseController.scrollPhotos', function() {
      spyOn(PhotoHandler, 'getLatestPhoto').and.returnValue(testPhotoObject)
      var pushedArray = testArray.concat(testPhotoObject)
      testFirebaseController.scrollPhotos = testArray
      testFirebaseController.appendCookiePhoto(testArray)
      expect(testFirebaseController.scrollPhotos).toEqual(pushedArray)
    });
    it('does not call PhotoHandler.getLatestPhoto if argument array is empty', function() {
      spyOn(PhotoHandler, 'getLatestPhoto')
      spyOn(testFirebaseController.scrollPhotos, 'push')
      testFirebaseController.appendCookiePhoto(emptyTestArray)
      expect(PhotoHandler.getLatestPhoto).not.toHaveBeenCalled()
    });
    it('does not call push to change testFirebaseController.scrollPhotos if argument array is empty', function() {
      spyOn(PhotoHandler, 'getLatestPhoto')
      spyOn(testFirebaseController.scrollPhotos, 'push')
      testFirebaseController.appendCookiePhoto(emptyTestArray)
      expect(testFirebaseController.scrollPhotos.push).not.toHaveBeenCalled()
    });
  });
});