SubmissionModule = {
  listenForFileUpload: function() {
    var file = document.getElementById('photo_image');
    file.onchange = function(e) {
      var extension = this.value.match(/\.([^\.]+)$/)[1];
      switch(extension) {
        case 'jpeg':
        case 'jpg':
        case 'png':
        case 'gif':
        case 'JPEG':
        case 'JPG':
        case 'PNG':
        case 'GIF':
          $('#submit_photo').css('display', 'inline');
          $('#cloud_icon').css('display', 'inline');
          $('#camera-icon').attr('id', 'camera_icon_left');
          $('input[type="file"]').css('left', '70px');
          break;
        default:
          $('#submit_photo').css('display', 'none');
          $('#cloud_icon').css('display', 'none');
          $('#camera_icon_left').attr('id', 'camera-icon');
          $('input[type="file"]').css('left', '110px');
          break;
      }
    }
    $('#submit_photo').click(function() {
      $('#submit_photo').css('display', 'none');
      $('#cloud_icon').css('display', 'none');
      $('#camera_icon_left').attr('id', 'camera-icon');
      $('input[type="file"]').css('left', '110px');
    })
  }
}

