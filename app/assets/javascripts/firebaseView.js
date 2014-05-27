function FirebaseView() {
  this.feed = '#feed'
  this.hidden = '.hidden'
  this.waiting = '#waiting'
}

FirebaseView.prototype = {
  appendPhoto: function(photoUrl) {
    var initialPhoto = this.createPhotoTemplate(photoUrl)
    $(this.feed).append(initialPhoto)
  },
  prependNewPhoto: function(photoUrl) {
    var newPhoto = this.createPhotoTemplate(photoUrl);
    $(this.feed).prepend(newPhoto)
  },
  createPhotoTemplate: function(photoUrl) {
    var $photo = $(this.hidden).clone();
    $photo.attr('src', photoUrl)
    $photo.removeClass('hidden')
    return $photo
  }
}