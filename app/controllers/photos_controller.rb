class PhotosController < ApplicationController
  def create
    @photo = Photo.new(image: params[:photo][:image])
    # Be careful here.  What happens if the save command has something wrong in
    # it (like, say a :bucket option is missing).  The error that returns will
    # be HTML...this will break your error handling implementation in
    # cameraController ln:24 where you assume you'll always get JSON.
    #
    # A begin/rescue might be appropriate here to ensure you **always** get
    # JSON.
    if @photo.save
      render json: { url: @photo.public_url }
    else
      render json: { errors: "Request could not be processed at this time. Please try again later." }, status: 422
    end
  end
end
