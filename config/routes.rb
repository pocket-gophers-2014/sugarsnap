Sugarsnap::Application.routes.draw do

  mount JasmineRails::Engine => '/specs' if defined?(JasmineRails)

  root :to => 'pages#home'

  resources :photos, only: [:new, :create]

  get '/demo', to:'pages#demo'
  get '/sidescroll', to:'pages#sidescroll'

end
