Rails.application.routes.draw do
  resources :products, only: [:index, :show, :create]
  get '/' => 'products#index', as: 'inventory'
  devise_for :users

  resources :users, only:[:show]

  root 'pages#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
