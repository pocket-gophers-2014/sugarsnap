PhotoHandler = {
  initialPhotosQuantity: function() {
    return 10
  },
  extractPhotoUrls: function(photos) {
    for (var i = 0; i < photos.length; i++) {
      photos[i] = photos[i].photoUrl
    }
    return photos
  },
  getFirstPhotos: function(photos) {
    var sortedPhotos = this.sortByTimeCreated(photos)
    return sortedPhotos.slice(1,this.initialPhotosQuantity)
  },
  getCachedPhotos: function(photos) {
    var sortedPhotos = this.sortByTimeCreated(photos)
    return sortedPhotos.slice(this.initialPhotosQuantity+1, sortedPhotos.length)
  },
  sortByTimeCreated: function(photos) {
    var sortedPhotos = photos.sort(function(a, b) {
      return b.createdAt - a.createdAt
    });
    return sortedPhotos;
  },
  getLatestPhoto: function(photos) {
    var sortedPhotos = this.sortByTimeCreated(photos);
    var sortedPhotoUrls =  this.extractPhotoUrls(sortedPhotos);
    return sortedPhotoUrls.shift()
  },
  getCookiePhotos: function(photos) {
    var sortedPhotos = this.sortByTimeCreated(photos)
    return sortedPhotos.slice(1,sortedPhotos.length)
  },
  getNextSetOfScrollPhotos: function(photos) {
    var sortedPhotos = this.sortByTimeCreated(photos)
    return sortedPhotos.splice(0,this.initialPhotosQuantity)
  }
}
