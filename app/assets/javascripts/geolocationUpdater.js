LocationUpdater = {
	getCoordinates: function() {
		navigator.geolocation.getCurrentPosition(this.initializeFeed,this.errors)
	},
	initializeFeed: function (posObject) {
		var coordinateObject = posObject.coords
		// sets global var
		gCoordinates = [coordinateObject.latitude,coordinateObject.longitude]
		var firebaseController = new FirebaseController(new FirebaseView(),FirebaseConnection.getGeo(), gCoordinates)
		FirebaseCommunicator.getInitialPhotos(firebaseController)
		FirebaseCommunicator.addAutomaticUpdate(firebaseController)
		ScrollListener.checkScrollThreshold(firebaseController)
		CookieController.manageCookies(gCoordinates, firebaseController.radius)
		SubmissionModule.listenForFileUpload()
	},
	errors: function () {
		alert("We're sorry,we couldn't find you! We'll keep searching.")
	}
}