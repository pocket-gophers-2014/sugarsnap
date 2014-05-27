var ScrollListener = (function() {
  var _informControllerOfScrollPosition = function(controller) {
    $(window).scroll(function() {
      if ($(window).scrollTop() >= ($(document).height() - 400) - $(window).height()) {
        controller.appendExtraPhotosOnScrollEvent()
      }
    });
  }

  return {
    checkScrollThreshold: function(controller) {
      _informControllerOfScrollPosition(controller)
    }
  }
})();