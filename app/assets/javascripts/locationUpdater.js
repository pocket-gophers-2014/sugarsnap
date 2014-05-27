LocationUpdater = {
	getCoordinates: function() {
    /* seems like you should test for geolocation support here...  gtfo if ie6
    * and all
    */
		navigator.geolocation.getCurrentPosition(this.initializeFeed,this.errors)
	},

  /* Is this name right?  I mean, it's the success callback to
   * getCurrentPosition, it's not really initializing....it's...updating the
   * feed...but initialization implies to me it'll only run once, but it runs
   * any time getCoordinates() fires
   *
   */
	initializeFeed: function (posObject) {
		var coordinateObject = posObject.coords
		// sets global var
		gCoordinates = [coordinateObject.latitude, coordinateObject.longitude]
		var firebaseController = new FirebaseController( new FirebaseView(), FirebaseConnection.getGeo(), gCoordinates )

    /* Ah-hah, here's where I think the global starts driving your design
     * and that's not right.
     *
     * You should really be creating this FirebaseController in initialize.js
     * and inject it right?  BUT because you have a global (and you're waiting
     * for it to be defined) you have to make all this Firebase logic be
     * dependent when it really has no real reason to be so.
     *
     * What you really want would be something that fires when the gCoordinates
     * updates.  In this case it would notify the FirebaseController to do all
     * this work.  The design isn't bad, but I think it could be easier.
     *
     * As implemented some of the secondary and tertiary level injections are
     * hard to spot.  initializeFeed creates a Controller which has a
     * FirebaseConnection.getGeo result injected.  I'd like to see that kind of
     * work in initialize.js versus buried in here.
     */

    // OK so if first 3 lines were bubbled out, calling these methods on those injected
    // objects would be really clear.  i.e. to initializeFeed you ask the
    // communicator to getInitialPhotos, addAutomaticUpdateToUserCoordinates,
    // etc.
		FirebaseCommunicator.getInitialPhotos( firebaseController )
		FirebaseCommunicator.addAutomaticUpdateToUserCoordinates( firebaseController )
		ScrollListener.checkScrollThreshold( firebaseController )
    /* Whoa, why is it a locationUpdater's concern to manage a cookie
     * manager...definitely should be injected....
     */
		CookieController.manageCookies( gCoordinates, firebaseController.radius )

    /* Again, not this thing's concern, is it?  should be injected, no? */
		SubmissionModule.listenForFileUpload()
	},

	errors: function () {
		alert("We're sorry,we couldn't find you! We'll keep searching.")
	}
}
