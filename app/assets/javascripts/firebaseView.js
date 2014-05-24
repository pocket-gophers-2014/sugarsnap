function FirebaseView() {
  this.feed = '#feed'
  this.hidden = '.hidden'
  this.waiting = '#waiting'
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
    this.removePendingLoadAnimation()
    $feed.prepend(newPhoto)
  },
  createPhotoTemplate: function(photoUrl) {
    var $photo = this.getHiddenTemplate().clone();
    $photo.attr('src', photoUrl)
    $photo.removeClass('hidden')
    return $photo
  },
  getWaitingSelector: function() {
    return $(this.waiting)
  },
  removePendingLoadAnimation: function() {
    $waitingSelector = this.getWaitingSelector()
    if($waitingSelector) {
      $waitingSelector.remove()
    }
  }

}