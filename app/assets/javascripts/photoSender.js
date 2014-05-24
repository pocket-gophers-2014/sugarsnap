PhotoSender = {
  sendToFirebase: function(url) {
    var geo = FirebaseConnection.getGeo()
    var timeStamp = Date.now()
    var userPosition = coordinates
    photoObject = {photoUrl: url, createdAt: timeStamp}
    geo.insertByLoc(userPosition,photoObject)
  }
}