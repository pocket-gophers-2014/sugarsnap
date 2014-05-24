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

    var token = TokenScraper.token();
    var formData = FormDataPreparer.prepare(event)

    var xhr = new XMLHttpRequest()
    xhr.open(event.method, event.action, true);
    xhr.setRequestHeader("X-CSRF-Token", token);
    xhr.onload = function(response) {
      if (xhr.status === 200) {
        var url = JSON.parse(response.target.responseText)
        WhateverRobertBuilds.nameOfFunction(url["url"])

      } else {
        console.log(response)
      }
    };
    xhr.send(formData);
  },
  receiveUrl: function(response) {
    console.log(response)
  }
}