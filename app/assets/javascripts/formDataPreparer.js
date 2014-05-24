var FormDataPreparer = {
  prepare: function(event) {
    var files = event.target[2].files
    var formData = new FormData()
    for (var i = 0; i < files.length; i++) {
      var file = files[i]
      if (!file.type.match('image.*')) {
        continue
      }
      formData.append('photo[image]',file,file.name)
    };
    return formData;
  }
}