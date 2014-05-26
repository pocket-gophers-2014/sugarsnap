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

  describe("bindCameraListener", function() {
    beforeEach(function() {
      $('body').append('<form><input type="submit" class="submit"></form>')
    });
    afterEach(function() {
      $('form').remove()
    });
    it("calls its view's getFormSelector function", function() {
      spyOn(cameraController.view, 'getFormSelector').and.returnValue($('form'))
      cameraController.bindCameraListener()
      expect(cameraController.view.getFormSelector).toHaveBeenCalled()
    });
    it("calls its sendPhotoToServer function", function() {
      spyOn(cameraController.view, 'getFormSelector').and.returnValue($('form'))
      spyOn(cameraController, 'sendPhotoToServer')
      cameraController.bindCameraListener()
      var submit = $('.submit')
      submit.submit()
      expect(cameraController.sendPhotoToServer).toHaveBeenCalled()
    });
  })

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
})