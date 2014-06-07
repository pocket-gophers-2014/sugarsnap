function CameraController(view) {
  this.view = view;
}

CameraController.prototype = {
  bindCameraListener: function(firebaseController) {
    var photoForm = this.view.getFormSelector()
    photoForm.addEventListener("submit", this.sendPhotoToServer.bind(firebaseController), false)
  },
  sendPhotoToServer: function(event) {
    event.preventDefault();
    var firebaseController = this
    SpinnerModule.renderSpinnerAnimation();
    var token = TokenScraper.token();
    var formData = FormDataPreparer.prepare(event)
    var xhr = new XMLHttpRequest()
    xhr.open(event.target.method, event.target.action, true);
    xhr.setRequestHeader("X-CSRF-Token", token);
    xhr.onload = function(response) {
      if (xhr.status === 200) {
        var url = JSON.parse(response.target.responseText)
        firebaseController.sendLivePhotoUpdateToFirebase(url["url"]);
      } else if (xhr.status === 422 || xhr.status === 500) {
        SpinnerModule.removeSpinnerAnimation()
        var errorHolder = JSON.parse(response.target.responseText)
        alert(errorHolder["errors"])
      }
    };
    xhr.send(formData);
  }
}