SpinnerModule = {
  renderSpinnerAnimation: function() {
    var template = $('#feed')
    var img = $('.hidden').clone()
    img.removeClass('hidden')
    img.attr('id', 'waiting')
    template.prepend(img.attr('src', 'spinner.gif'))
  },
  removeSpinnerAnimation: function() {
    if ($('#waiting')) {
      $('#waiting').remove()
    }
  }
}