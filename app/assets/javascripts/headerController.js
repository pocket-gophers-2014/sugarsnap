/* Hm, this is going to sound really strange from me of all people, but I'm not
 * sure you really need this controller.  The thing is, you're just using this
 * controller to route calls and events from the view back to the ....view.
 * There's no *thinking* that the controller's doing, really.  You're just
 * doing basic DOM tricks with jQuery.  It's a long round-trip for a simple
 * toggle() operation.  I'd consider ditching this.
 */
function HeaderController(view) {
  this.view = view;
}

HeaderController.prototype = {
  bindHeaderListener: function() {
    var header = this.view.getHeader()
    header.on('click', this.view.toggleSubheaderDisplay.bind(this.view))
  }
}
