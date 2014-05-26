LocationUpdater = {
	getCoordinates: function() {
		navigator.geolocation.getCurrentPosition(this.initializeFeed,this.errors)
	},
	initializeFeed: function (posObject) {
		var coordinateObject = posObject.coords
		// sets global var
		coordinates = [coordinateObject.latitude,coordinateObject.longitude]
		var firebaseController = new FirebaseController(new FirebaseView(),FirebaseConnection.getGeo(), coordinates)
		FirebaseCommunicator.getInitialPhotos(firebaseController)
		FirebaseCommunicator.addAutomaticUpdate(firebaseController)
		CookieController.manageCookies(coordinates, firebaseController.radius)

		SubmissionModule.listenForFileUpload()
	},
	errors: function () {
		// console.log('we are screwed')
	},
}