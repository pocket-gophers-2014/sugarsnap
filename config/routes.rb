Sugarsnap::Application.routes.draw do

  mount JasmineRails::Engine => '/specs' if defined?(JasmineRails)

  root :to => 'pages#home'

  resources :photos, only: [:new, :create]

end
