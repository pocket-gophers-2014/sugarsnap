class PhotosController < ApplicationController

  def new
    @photo = Photo.new
  end

  def create
    p 'reached the create route'
    p params
    @photo = Photo.new(image: params[:photo][:image])
    if @photo.save
      render json: { url: "find me on Amazon" }
    else
      render json: { hey: @photo.errors.full_messages }
    end

  end

end