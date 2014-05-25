describe('FirebaseController', function() {
  var view;
  var geo;
  var coordinates;
  var testController;
  beforeEach(function() {
    view = new FirebaseView()
    geo = 0
    coordinates = 0
    testController = new FirebaseController(view,geo,coordinates)
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
    it('returns an array of photo urls from array of photo objects after sorting and slicing the array in the photoExtractor module', function() {
      var testArray = [{photoUrl:'url',createdAt:0},{photoUrl:'url2',createdAt:1}]
      expect(testController.extractInitialPhotos(testArray)).toEqual(['url'])
    })
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
