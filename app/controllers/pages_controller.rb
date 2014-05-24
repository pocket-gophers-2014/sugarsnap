class PagesController < ApplicationController

  def home
    @sugarsnap = 'Sugarsnap - A location based photo sharing app'
    @photo = Photo.new
  end

end