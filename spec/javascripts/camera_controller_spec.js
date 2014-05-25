describe('CameraController', function() {
  var cameraController;
  var cameraView;
  beforeEach(function() {
    cameraView = new CameraView()
    cameraController = new CameraController(cameraView)
  })
  it("is defined", function() {
    expect(cameraController).toBeDefined();
  });
  it("has a view defined", function() {
    expect(cameraController.view).toBeDefined();
  });
  it("has the correct view", function() {
    expect(cameraController.view).toEqual(cameraView);
  });
  it("has a function bindCameraListener defined", function() {
    expect(cameraController.bindCameraListener).toBeDefined();
  });
  it("has a function sendPhotoToServer defined", function() {
    expect(cameraController.sendPhotoToServer).toBeDefined();
  });

  describe("sendPhotoToServer", function() {
    beforeEach(function(){
      jasmine.Ajax.install();
    });
    afterEach(function(){
      jasmine.Ajax.uninstall();
    });
    it("sends back the correct fake response", function() {
      var doneFn = jasmine.createSpy("success");

      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function(arguments) {
        if (this.readyState == this.DONE) {
          doneFn(this.responseText);
        }
      };

      xhr.open("POST", "/photos");
      xhr.send();

      expect(jasmine.Ajax.requests.mostRecent().url).toBe('/photos');
      expect(doneFn).not.toHaveBeenCalled();


      jasmine.Ajax.requests.mostRecent().response({


        "status": 200,

        "contentType": 'application/json',

        "responseText": '{"url":"http://s3-us-west-1.amazonaws.com/sugarsnapper/photos/images/000/000/001/medium/awesome.jpg"}'
      });

      expect(doneFn).toHaveBeenCalledWith('{"url":"http://s3-us-west-1.amazonaws.com/sugarsnapper/photos/images/000/000/001/medium/awesome.jpg"}');
    })
  })


  // describe("bindCameraListener", function() {
  //   beforeEach(function() {
  //     // jasmine.getFixtures().load('camera_form')
  //     debugger
  //     var hey = loadFixtures('camera.html')
  //     debugger

  //   })
  //   it("calls", function() {
  //     spyOn(cameraController.view, "getFormSelector");
  //     cameraController.bindCameraListener();
  //     expect(cameraController.view.getFormSelector).toHaveBeenCalled()
  //   });
  // })
})