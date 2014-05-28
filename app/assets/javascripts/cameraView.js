function CameraView() {
  this.formSelector = 'form';
}

CameraView.prototype = {
  getFormSelector: function() {
    return document.getElementByTagName(this.formSelector)
  }
}