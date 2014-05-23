class PagesController < ApplicationController

  def home
    @sugarsnap = 'Sugarsnap - A location based photo sharing app'
    @image = Image.new()
    @form = Amazon.presigned_post
  end

end