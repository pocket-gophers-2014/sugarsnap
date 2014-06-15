var SideScroller = (function() {
  var _informControllerOfScrollPosition = function(photoController) {
    window.onscroll = function() {
      if ($(window).scrollLeft() >= ($(document).width() - 200) - $(window).width()) {
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
