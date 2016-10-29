require 'sinatra/base'
require 'json'
require_relative 'models/thermostat'

class Server < Sinatra::Base

  get '/thermostat' do
    headers 'Access-Control-Allow-Origin' => '*'
    content_type :json
    { :temperature => Thermostat.last.temperature, :city => Thermostat.last.city }.to_json
  end

  post '/thermostat' do
    headers 'Access-Control-Allow-Origin' => '*'
    p params[:city]
    p params[:temperature]
    Thermostat.create(city: params[:city], temperature: params[:temperature])
  end

  run! if app_file == $0
end
