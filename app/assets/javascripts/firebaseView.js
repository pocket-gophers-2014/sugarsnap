function FirebaseView() {
  this.feed = '#feed'
  this.hidden = '.hidden'
}

FirebaseView.prototype = {
  getFeed: function() {
    return $(this.feed)
  },
  getHiddenTemplate: function() {
    return $(this.hidden)
  },
  appendPhoto: function(photoUrl) {
    var $feed = this.getFeed();
    var initialPhoto = this.createPhotoTemplate(photoUrl)
    $feed.append(initialPhoto)
  },
  prependNewPhoto: function(photoUrl) {
    var $feed = this.getFeed();
    var newPhoto = this.createPhotoTemplate(photoUrl);
    $feed.prepend(newPhoto)
  },
  createPhotoTemplate: function(photoUrl) {
    var $photo = this.getHiddenTemplate();
    $photo.attr('src', photoUrl)
    $photo.removeClass('hidden')
    return $photo
  }

}