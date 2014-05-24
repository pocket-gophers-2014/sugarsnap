
describe('PhotoHandler', function() {
  describe('extractPhotoUrls', function() {
    it('reassigns array objects to the value of its url property', function() {
        var testArray = [{photoUrl: "url",value:0}]
        expect(PhotoHandler.extractPhotoUrls(testArray)).toEqual(["url"])
    })
  })
  describe('sortByTimeCreated', function(){
    it('returns an array sorted in descending order by createdAt', function() {
      var testArray = [{createdAt:1,value:1},{createdAt:2,value:0}]
      expect(PhotoHandler.sortByTimeCreated(testArray)).toEqual([{createdAt:2,value:0},{createdAt:1,value:1}])
    })
  })
  describe('getFirstTenPhotos', function() {
    it('returns a descending sorted array with index 1-9', function() {
      var testArray = [{createdAt:1},{createdAt:2},{createdAt:3},{createdAt:4},{createdAt:5},{createdAt:6},{createdAt:7},{createdAt:8},{createdAt:9},{createdAt:10},{createdAt:11},{createdAt:12}]
      expect(PhotoHandler.getFirstTenPhotos(testArray)).toEqual([{createdAt:11},{createdAt:10},{createdAt:9},{createdAt:8},{createdAt:7},{createdAt:6},{createdAt:5},{createdAt:4},{createdAt:3}])
    })
  })
  describe('getLatestPhoto', function() {
    it('returns the first element in an array that is sorted by createdAt', function() {
      var testArray = [{createdAt:1,value:1},{createdAt:2,value:0}]
      expect(PhotoHandler.getLatestPhoto(testArray)).toEqual({createdAt:2,value:0})
    })
  })
})