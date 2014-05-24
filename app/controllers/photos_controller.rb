class PhotosController < ApplicationController
  def create
    p params
    p params[:photo][:image]
    @photo = Photo.new(image: params[:photo][:image])
    if @photo.save
      render json: { url: @photo.public_url }
    else
      render json: { errors: "Request could not be processed at this time. Please try again later." }, status: 422
    end
  end
end