function CameraController(view) {
  this.view = view;
}

CameraController.prototype = {
  bindCameraListener: function() {
    var submitPhotoButton = this.view.getNewPhotoSelector()
    console.log(submitPhotoButton)
    $('form').on("submit", this.sendPhotoToServer.bind(this))
  },
  sendPhotoToServer: function(event) {
    event.preventDefault();
    var files = event.target[2].files
    var token = TokenScraper.token();
    var formData = FormDataPreparer.prepare(event)

    var xhr = new XMLHttpRequest()
    xhr.open(event.target.method, event.target.action, true);
    xhr.setRequestHeader("X-CSRF-Token", token);
    xhr.onload = function(response) {
      if (xhr.status === 200) {
        var url = JSON.parse(response.target.responseText)
        PhotoSender.sendToFirebase(url["url"])
        console.log(url["url"])
      } else {
        console.log('fileure!')
      }
    };
    xhr.send(formData);
  },
  receiveUrl: function(response) {
    console.log(response)
  }
}