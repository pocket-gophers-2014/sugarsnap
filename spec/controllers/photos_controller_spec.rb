require 'spec_helper'


describe PhotosController do
  context '#create' do
    let(:image) { { :image => fixture_file_upload('/files/awesome.jpg', 'image/jpg') } }
    it 'is successful' do
      params = { photo: image }
      post :create, params
      expect(response).to be_success
    end

    it 'uploads a file' do

    end
  end
end


# Parameters: {"photo"=>{"image"=>#<ActionDispatch::Http::UploadedFile:0x007f82a3a5cc88 @original_filename="awesome.jpg", @content_type="image/jpeg", @headers="Content-Disposition: form-data; name=\"photo[image]\"; filename=\"awesome.jpg\"\r\nContent-Type: image/jpeg\r\n", @tempfile=#<Tempfile:/var/folders/t9/wt5rqhvd7hz68_nt_5yfs79w0000gn/T/RackMultipart20140524-15910-1rk6slr>>}}


# Parameters: {"photo"=>{"image"=>#<Rack::Test::UploadedFile:0x007fc1ec7f3770 @content_type="image/jpg", @original_filename="awesome.jpg", @tempfile=#<Tempfile:/var/folders/t9/wt5rqhvd7hz68_nt_5yfs79w0000gn/T/awesome.jpg20140524-21085-1eypulj>>}}

# Parameters: {"photo"=>{"image"=>{"file"=>#<Rack::Test::UploadedFile:0x007f95f9f88888 @content_type="image/jpg", @original_filename="awesome.jpg", @tempfile=#<Tempfile:/var/folders/t9/wt5rqhvd7hz68_nt_5yfs79w0000gn/T/awesome.jpg20140524-20829-6iguub>>}}}