Rails.application.routes.draw do
  resources :sides
  resources :menutypes
  resources :meals
  resources :menus
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
