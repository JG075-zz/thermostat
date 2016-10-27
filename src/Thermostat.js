function Thermostat() {
  this.temperature = 20;
  this.minTemp = 10;
}

Thermostat.prototype.up = function() {
  this.temperature += 1;
};

Thermostat.prototype.down = function() {
  if (this.temperature > this.minTemp){
    this.temperature -= 1;
  };
};
