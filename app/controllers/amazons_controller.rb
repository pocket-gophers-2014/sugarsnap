class AmazonsController < ApplicationController

  def new
    @post = Amazon.presigned_post
    @fields = {}
    @post.fields.each do |(name, value)|
      @fields[name] = value
    end
    p @fields
    render :json => @fields
  end

end