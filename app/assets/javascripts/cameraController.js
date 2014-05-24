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
    console.log(event)
    var form = $('form')
    var fileSelect = $('#photo_image')
    var uploadButton = $('#submit_photo')
    var files = event.target[2].files
    var token = $("meta[name='csrf-token']").attr("content");
    console.log(files)
    var formData = new FormData()
    for (var i = 0; i < files.length; i++) {
      var file = files[i]
      if (!file.type.match('image.*')) {
        continue
      }
      formData.append('photo[image]',file,file.name)
    };

    var xhr = new XMLHttpRequest()

    xhr.open('post', '/photos', true);
    xhr.setRequestHeader("X-CSRF-Token", token);
    xhr.onload = function(response) {
      if (xhr.status === 200) {
        //Files uploaded
        console.log(response)
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