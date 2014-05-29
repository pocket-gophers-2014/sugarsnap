function CameraView() {
  this.formSelector = 'new_photo';
}

CameraView.prototype = {
  getFormSelector: function() {
    return document.getElementById(this.formSelector)
  }
}