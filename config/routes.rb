Rails.application.routes.draw do
  root 'pages#index'
  resources :products, only: [:index, :show, :create, :update]
  get '/i' => 'products#index', as: 'inventory'
  devise_for :users

  resources :users, only:[:index]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
