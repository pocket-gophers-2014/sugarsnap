LocationUpdater = {

	getCoordinates: function() {
		navigator.geolocation.getCurrentPosition(this.initializeFeed,this.errors)
	},
	initializeFeed: function (posObject) {
		var coordinates = posObject.coords
		var coordinatesArray = [coordinates.latitude,coordinates.longitude]
		var firebaseController = new FirebaseController(new FirebaseView(),FirebaseConnection.getGeo(), coordinatesArray)
		FirebaseCommunicator.getInitialPhotos(firebaseController)
		FirebaseCommunicator.addAutomaticUpdate(firebaseController)
	},
	errors: function () {
		console.log('we are screwed')
	}
}