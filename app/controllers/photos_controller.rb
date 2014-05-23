class PhotosController < ApplicationController

  def new
    @photo = Photo.new
  end

  def create
    p params
  end

end