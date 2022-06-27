Rails.application.routes.draw do
  
  # HTTP Verb '/route_name'
  #  => 
  #  'name_of_our_controller#name_our_method'
  # get '/' => 'food#home'
  get '/austin/:ingredient1/:ingredient2' => 'food#tacos'
  get '/jenner' => 'food#sushi'
  get '/davon/:flavor' => 'food#cheese_cake'
  root 'food#home'
end
