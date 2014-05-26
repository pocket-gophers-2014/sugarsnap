PhotoHandler = {
  extractPhotoUrls: function(photos) {
    for (var i = 0; i < photos.length; i++) {
      photos[i] = photos[i].photoUrl
    }
    return photos
  },
  getFirstTenPhotos: function(photos) {
    var sortedPhotos = this.sortByTimeCreated(photos)
    return sortedPhotos.slice(1,10)
  },
  getCachedPhotos: function(photos) {
    var sortedPhotos = this.sortByTimeCreated(photos)
    var length = sortedPhotos.length
    return sortedPhotos.slice(11,length)
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

// var photos has everything
//
//
//
//
//
//
//
//
//
//