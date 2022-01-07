Rails.application.routes.draw do
  namespace :api do
    get "products", to: "products#index"
    get "categories", to: "products#get_categories"
    get "categories/:category", to: "products#category"
    resources :sellers, only: [:index, :show]
    resources :buyers, only: [:show]
  end
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
