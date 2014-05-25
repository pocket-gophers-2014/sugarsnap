LocationUpdater = {
	getCoordinates: function() {
		navigator.geolocation.getCurrentPosition(this.initializeFeed,this.errors)
	},
	initializeFeed: function (posObject) {
		var coordinateObject = posObject.coords
		// sets global var
		coordinates = [coordinateObject.latitude, coordinateObject.longitude]
		firebaseController = new FirebaseController(new FirebaseView(),FirebaseConnection.getGeo(), coordinates)
		FirebaseCommunicator.getInitialPhotos(firebaseController)
		CookieController.manageCookies(coordinates, firebaseController.radius)
		SubmissionModule.listenForFileUpload()
	},
	errors: function () {
		// console.log('we are screwed')
	},
	setCoordinateUpdater: function() {
		navigator.geolocation.watchPosition(this.updatePosition)
	},
	updatePosition: function(posObject) {
		var coordinateObject = posObject.coords
		coordinates = [coordinateObject.latitude, coordinateObject.longitude]
		firebaseController.locationChanged()
		FirebaseCommunicator.updateCoordinateListener(firebaseController)
	}
}