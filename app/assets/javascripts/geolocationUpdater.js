LocationUpdater = {

	getCoordinates: function() {
		navigator.geolocation.getCurreentPosition(this.success,this.error)
	}
	success: function (posObject) {
		var coordinates = posObject.coords
		var coordinatesArray = [coordinates.latitude,coordinates.longitude]
		console.log(coordinatesArray)
		return coordinatesArray
	},
	error: function () {
		console.log('we are screwed')
	}
}