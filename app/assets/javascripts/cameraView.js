function CameraView() {
  this.newPhotoSelector = '#new_photo';
  this.submitPhotoSelector = '#submit_photo'
}

CameraView.prototype = {
  getNewPhotoSelector: function() {
    return $(this.newPhotoSelector);
  }
}