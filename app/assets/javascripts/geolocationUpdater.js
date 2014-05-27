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
		ScrollListener.checkScrollThreshold(firebaseController)
		CookieController.manageCookies(coordinates, firebaseController.radius)
		SubmissionModule.listenForFileUpload()
	},
	errors: function () {
		alert("We're sorry,we couldn't find you! We'll keep searching.")
	}
}