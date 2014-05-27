function CameraController(view) {
  this.view = view;
}

CameraController.prototype = {
  bindCameraListener: function() {
    var photoForm = this.view.getFormSelector()
    photoForm.on("submit", this.sendPhotoToServer.bind(this))
  },
  sendPhotoToServer: function(event) {
    event.preventDefault();
    var token = TokenScraper.token();
    var formData = FormDataPreparer.prepare(event)
    SpinnerModule.renderSpinnerAnimation();
    var xhr = new XMLHttpRequest()
    xhr.open(event.target.method, event.target.action, true);
    xhr.setRequestHeader("X-CSRF-Token", token);
    xhr.onload = function(response) {
      if (xhr.status === 200) {
        var url = JSON.parse(response.target.responseText)
        FirebaseCommunicator.sendImageToFirebase(url["url"])
      } else if (xhr.status === 422 || xhr.status === 500){
        SpinnerModule.removeSpinnerAnimation()
        var errorHolder = JSON.parse(response.target.responseText)
        alert(errorHolder["errors"])
      }
    };
    xhr.send(formData);
  }
}