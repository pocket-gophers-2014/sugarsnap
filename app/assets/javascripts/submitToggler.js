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
          $('#submit_photo').css('display', 'inline');
          $('#cloud_icon').css('display', 'inline');
          $('#camera-icon').attr('id', 'camera_icon_left');
          $('input[type="file"]').css('left', '21%');
          $('input[type="file"]').css('right', '21%');
          break;
        default:
          $('#submit_photo').css('display', 'none');
          $('#cloud_icon').css('display', 'none');
          $('#camera_icon_left').attr('id', 'camera-icon');
          $('input[type="file"]').css('left', '38.5%');
          $('input[type="file"]').css('right', '38.5%');
          break;
      }
    }
    $('#submit_photo').click(function() {
      $('#submit_photo').css('display', 'none');
      $('#cloud_icon').css('display', 'none');
      $('#camera_icon_left').attr('id', 'camera-icon');
      $('input[type="file"]').css('left', '38.5%');
      $('input[type="file"]').css('right', '38.5%');
    })
  }
}
