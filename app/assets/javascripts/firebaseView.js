function FirebaseView() {
  this.feed = '#feed'
}

FirebaseView.prototype = {
  getFeed: function() {
    return $(this.feed)
  }
  appendInitialFeed: function() {
    var feed = this.getFeed();

  }
}