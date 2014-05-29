var InfiniteScroller = (function() {
  var _informControllerOfScrollPosition = function(photoController) {
    window.onscroll = function() {
      if ($(window).scrollTop() >= ($(document).height() - 400) - $(window).height()) {
        photoController.appendExtraPhotosOnScrollEvent()
      }
    };
  }
  return {
    checkScrollThreshold: function(photoController) {
      _informControllerOfScrollPosition(photoController)
    }
  }
})();
