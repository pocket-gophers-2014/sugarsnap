PhotoSender = {
  sendToFirebase: function(url) {
    var geo = FirebaseConnection.getGeo()
    var timeStamp = Date.now()
    //uses global var (will break function if called instantly)
    var userPosition = coordinates
    photoObject = {photoUrl: url, createdAt: timeStamp}
    geo.insertByLoc(userPosition,photoObject)
  }
}