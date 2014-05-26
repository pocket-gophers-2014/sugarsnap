describe('FirebaseController', function() {
  var view;
  var geo;
  var coordinates;
  var testController;
  var testArray;
  beforeEach(function() {
    view = new FirebaseView()
    geo = 0
    coordinates = 0
    testController = new FirebaseController(view,geo,coordinates)
    testArray = [{photoUrl:'url',createdAt:0},{photoUrl:'url2',createdAt:1}]
  })
  describe('init', function() {
    it('calls appendPhotosToFeed', function() {
      spyOn(testController, 'appendPhotosToFeed')
      spyOn(testController, 'extractInitialPhotos')
      testController.init()
      expect(testController.appendPhotosToFeed).toHaveBeenCalled()
    })
    it('calls extractInitialPhotos', function() {
      spyOn(testController, 'appendPhotosToFeed')
      spyOn(testController, 'extractInitialPhotos')
      testController.init()
      expect(testController.extractInitialPhotos).toHaveBeenCalled()
    })
  })
  describe('extractInitialPhotos', function() {
    it('calls PhotoHandler.getFirstTenPhotos', function() {
      spyOn(PhotoHandler, 'getFirstTenPhotos')
      spyOn(PhotoHandler, 'extractPhotoUrls')
      testController.extractInitialPhotos(testArray)
      expect(PhotoHandler.getFirstTenPhotos).toHaveBeenCalled()
    });
    it('calls PhotoHandler.extractInitialPhotos', function() {
      spyOn(PhotoHandler, 'getFirstTenPhotos')
      spyOn(PhotoHandler, 'extractPhotoUrls')
      testController.extractInitialPhotos(testArray)
      expect(PhotoHandler.extractPhotoUrls).toHaveBeenCalled
    });
    it('returns an array of photo urls from array of photo objects after sorting and slicing the array in the photoExtractor module', function() {
      expect(testController.extractInitialPhotos(testArray)).toEqual(['url'])
    });
  })
  // describe('updatePhotoStream', function(){
  //   it('calls prependNewPhoto', function() {
  //     var testArray = [0]
  //     spyOn(testController, 'testController.view.appendPhoto')
  //     testController.appendPhotosToFeed(testArray)
  //     expect(testController.view.appendPhoto).toHaveBeenCalled()
  //   })
  // })

})
