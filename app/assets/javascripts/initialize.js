$(document).ready(function() {
  var firebaseController = new FirebaseController(new FirebaseView(), FirebaseConnection.getGeo(), [37.7845035, -122.3969726])
  FirebaseCommunicator.getInitialPhotos(firebaseController)
  FirebaseCommunicator.addAutomaticUpdate(firebaseController)
})