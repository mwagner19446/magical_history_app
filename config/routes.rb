MagicalHistoryApp::Application.routes.draw do

  #root page with neighborhood selection
  root "neighborhoods#index"

  #tour page:  the points of interest
  resources :neighborhoods,  only: [:show]

  #For Future Use: 
  # resources :neighborhood do 
  #   resources :places
  # end   

end
