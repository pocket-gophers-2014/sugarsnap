function CameraController(view) {
  this.view = view;
}

CameraController.prototype = {
  bindCameraListener: function() {
    var photoForm = this.view.getFormSelector()
    photoForm.on("submit", this.sendPhotoToServer.call(this, firebaseController))
  },
  sendPhotoToServer: function(event) {
    event.preventDefault();
    SpinnerModule.renderSpinnerAnimation();
    var token = TokenScraper.token();
    var formData = FormDataPreparer.prepare(event)
    var xhr = new XMLHttpRequest()
    xhr.open(event.target.method, event.target.action, true);
    xhr.setRequestHeader("X-CSRF-Token", token);
    xhr.onload = function(response) {
      if (xhr.status === 200) {
        this._xhrSuccess(response, firebaseController)
      } else if (xhr.status === 422 || xhr.status === 500) {
        this._xhrFailure(response)
      }
    };
    xhr.send(formData);
  },
  _xhrSuccess: function(response, firebaseController) {
    var url = JSON.parse(response.target.responseText);
    firebaseController.sendLivePhotoUpdateToFirebase(url["url"]);
  },
  _xhrFailure: function(response) {
    SpinnerModule.removeSpinnerAnimation()
    var errorHolder = JSON.parse(response.target.responseText)
    alert(errorHolder["errors"])
  }
}