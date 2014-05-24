function FirebaseView() {
  this.feed = '#feed'
}

FirebaseView.prototype = {
  getFeed: function() {
    return $(this.feed)
  },
  appendPhoto: function(photo) {
    var $feed = this.getFeed();
    var initialPhoto = $('.hidden').clone()
    initialPhoto.attr('src', photo);
    initialPhoto.removeClass('hidden');
    $feed.append(initialPhoto)
  },
  prependNewPhoto: function(photo) {
    var $feed = this.getFeed();
    var newPhoto = $('.hidden').clone()
    newPhoto.attr('src', photo);
    newPhoto.removeClass('hidden');
    $feed.prepend(newPhoto)
  }
}