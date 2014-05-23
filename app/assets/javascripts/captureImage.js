// if (window.File && window.FileReader && window.FileList && window.Blob) {
//   alert("great success!")
// } else {
//   alert('The File APIs are not fully supported in this browser.')
// }

var formData = new FormData();
for (var i = 0; i < files.length; i++) {
  formData.append('file', files[i]);
  var request = $.ajax({
    url: 'https://s3.amazonaws.com/sugarsnapper/',
    type: 'POST',
    data: { file: files[i] }
  }),
  request.done(function(){ console.log('finished the upload') })
}
