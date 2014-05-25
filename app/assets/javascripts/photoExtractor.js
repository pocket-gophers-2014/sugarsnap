PhotoHandler = {
  extractPhotoUrls: function(photos) {
    for (var i = 0; i < photos.length; i++) {
      photos[i] = photos[i].photoUrl
    }
    return photos
  },
  getFirstTenPhotos: function(photos) {
    var sortedPhotos = this.sortByTimeCreated(photos)
    return sortedPhotos.slice(0,100)
  },
  sortByTimeCreated: function(photos) {
    var sortedPhotos = photos.sort(function(a, b) {
      return b.createdAt - a.createdAt
    })
    return sortedPhotos;
  },
  getLatestPhoto: function(photos) {
    var sortedPhotos = this.sortByTimeCreated(photos)
    return sortedPhotos.shift()
  }
}