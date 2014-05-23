function FirebaseView() {
  this.feed = '#feed'
}

FirebaseView.prototype = {
  getFeed: function() {
    return $(this.feed)
  },
  appendPhoto: function(photo) {
    // var feed = this.getFeed();

  }
}