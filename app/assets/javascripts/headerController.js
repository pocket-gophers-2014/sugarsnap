function HeaderController(view) {
  this.view = view;
}

HeaderController.prototype = {
  bindHeaderListener: function() {
    var header = this.view.getHeader()
    header.on('click', this.view.toggleSubheaderDisplay.bind(this.view))
  }
}