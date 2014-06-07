
SugarSnap = {
  initialize: function() {
    if (typeof demoPosition !== 'undefined') {
      this.getCoordinatesSuccess(demoPosition)
    } else {
    navigator.geolocation.getCurrentPosition(this.getCoordinatesSuccess, this.getCoordinatesFailure.bind(this))
    }
  },
  getCoordinatesSuccess: function(position) {
    // initializes the application
  },
  getCoordinatesFailure: function() {
    alert("We're sorry,we couldn't find you! We'll keep searching.")
    this.initialize()
  }
}

