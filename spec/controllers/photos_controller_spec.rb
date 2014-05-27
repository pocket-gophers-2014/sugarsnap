require 'spec_helper'


describe PhotosController do
  context '#create' do
    let(:image) { { :image => fixture_file_upload('/files/awesome.jpg', 'image/jpg') } }
    let(:params) { { photo: image } }
    let(:bad_params) { { photo: pdf } }
    let(:pdf) { { :image => fixture_file_upload('/files/awesome_menus_mockups.pdf', 'pdf/pdf') } }
    it 'is successful' do
      post :create, params
      expect(response).to be_success
    end

    it 'uploads a file' do
      post :create, params
      expect(Photo.count).to eq(1)
    end

    # Seems like you should be stubbing this, no?  It seems like you're really
    # sending this through S2.
    it 'should return the correct public_url' do
      public_url = "http://s3-us-west-1.amazonaws.com/sugarsnapper/photos/images/000/000/001/medium/awesome.jpg"
      post :create, params
      parsed_body = JSON.parse(response.body)
      expect(parsed_body["url"]).to eq public_url
    end

    it 'does not upload a file if no image present' do
      post :create, bad_params
      expect(Photo.count).to eq(0)
    end

    it 'should return error json' do
      error_response = "{\"errors\":\"Request could not be processed at this time. Please try again later.\"}"
      post :create, bad_params
      expect(response.body).to eq(error_response)
    end
  end
end
