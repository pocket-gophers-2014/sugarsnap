var SpinnerModule = (function() {
  var feedSelector = '#feed'
  var hiddenSelector = '.hidden'
  var waitingSelector = '#waiting'

  return {
    renderSpinnerAnimation: function() {
      var $template = $(feedSelector)
      var $imageClone = $(hiddenSelector).clone()
      $imageClone.removeClass('hidden')
      $imageClone.attr('id', 'waiting')
      $template.prepend($imageClone.attr('src', 'spinner.gif'))
    },
    removeSpinnerAnimation: function() {
      if ($(waitingSelector)) {
        $(waitingSelector).remove()
      }
    }
  }
})();