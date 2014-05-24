require 'spec_helper'


describe PagesController do
  context '#home' do
    it 'should initialize a new photo' do
      get :home
      expect(assigns :photo).to be_a_new(Photo)
    end
  end
end