Rails.application.routes.draw do
  root 'root#index'

  get '/random_greeting.json', to: 'greetings#random_greeting'
end
