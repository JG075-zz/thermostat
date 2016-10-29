require 'data_mapper'

class Thermostat
  include DataMapper::Resource

  property :id, Serial
  property :temperature, Integer
  property :city, String

  DataMapper.setup(:default, "postgres://localhost/thermostat")
  DataMapper.finalize
  DataMapper.auto_upgrade!
end
