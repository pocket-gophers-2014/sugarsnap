function CameraView() {
  this.formSelector = 'form';
}

CameraView.prototype = {
  getFormSelector: function() {
    return $(this.formSelector)
  }
}