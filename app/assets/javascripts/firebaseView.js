function FirebaseView() {
  this.feed = '#feed'
}

FirebaseView.prototype = {
  getFeed: function() {
    return $(this.feed)
  },
  appendPhoto: function(photo) {
    var $feed = this.getFeed();
    $feed.append(photo)
  },
  prependNewPhoto: function(photo) {
    var $feed = this.getFeed();
    var newPhoto = $('.hidden').clone()
    newPhoto.attr('src', photo);
    newPhoto.removeClass('hidden');
    $feed.prepend(newPhoto)
  }
}