PhotoHandler = {
  extractPhotoUrls: function(photos) {
    for (var i = 0; i < photos.length; i++) {
      photos[i] = photos[i].photoUrl
    }
    return photos
  },
  getFirstTenPhotos: function(photos) {
    var sortedPhotos = this.sortByTimeCreated(photos)
    var firstTenPhotos = sortedPhotos.slice(0,10);
    return firstTenPhotos;
  },
  sortByTimeCreated: function(photos) {
    var sortedPhotos = photos.sort(function(a, b) {
      return b.createdAt - a.createdAt
    })
    return sortedPhotos;
  }
}