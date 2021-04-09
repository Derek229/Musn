Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api do
    get "/api_test", to:'static#api_test'

    get 'songs', to: 'songs#index'
    get 'songs/:id', to: 'songs#show'

    get 'users', to: 'users#index'
    get 'users/:id', to: 'users#show'

    get 'bands', to: 'bands#index'
    get 'bands/:id', to: 'bands#show'

    get 'favorites', to: 'favorites#index'

    resources :users
    resources :songs
    resources :bands
  end
end
