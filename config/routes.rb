Rails.application.routes.draw do
  resources :cars
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :cars, only: %i(index create)
    resources :makers, only: %i(index)
    resources :car_models, only: %i(show)
  end
end
