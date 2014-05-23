// if (window.File && window.FileReader && window.FileList && window.Blob) {
//   alert("great success!")
// } else {
//   alert('The File APIs are not fully supported in this browser.')
// }

// var formData = new FormData();
// for (var i = 0; i < files.length; i++) {
//   formData.append('file', files[i]);
//   var request = $.ajax({
//     url: 'https://s3.amazonaws.com/sugarsnapper/',
//     type: 'POST',
//     data: { file: files[i] }
//   }),
//   request.done(function(){ console.log('finished the upload') })
// }

// function signUrl ( bucketName, fileName ) {
//   var objectName = escape( fileName );

//   var accessKey = awsCreds['acces_key'];
//   var secretKey = awsCreds['secret_key'];

//   var currentTime = new Data();
//   var expires = Math.floor( ( currentTime.getTime() / 1000 ) + ( 5 * 60 ) );

//   var stringToSign = "Get\n\n\n" + expires + "\n/" + bucketName + "/" + objectName;
//   var signature = encodeURIComponent( b64_hmac_sha1( secretKey, stringToSign )+ '=' );

//   var url = 'http://' + bucketName + '/' + objectName + '?AWSAccessKeyId=' + accessKey + '&Expires=' + expires + '&Signature=' + signature;

//   return url;
// }