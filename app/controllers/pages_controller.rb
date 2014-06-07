class PagesController < ApplicationController

  def home
    @photo = Photo.new
  end

  def demo
    @photo = Photo.new
  end

end