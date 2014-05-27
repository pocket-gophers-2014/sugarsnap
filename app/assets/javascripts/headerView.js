function HeaderView() {
  this.headerSelector = '#header'
  this.subheaderSelector = '#subheader'
}

HeaderView.prototype = {
  getHeader: function() {
    return $(this.headerSelector)
  },
  toggleSubheaderDisplay: function() {
    $(this.subheaderSelector).toggle();
  }
}