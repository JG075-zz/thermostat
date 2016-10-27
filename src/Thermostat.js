function Thermostat() {
  this.temperature = 20;
  this.minTemp = 10;
  this.maxTemp = 25;
}

Thermostat.prototype.up = function() {
  if (this.temperature < this.maxTemp) {
    this.temperature += 1;
  }
};

Thermostat.prototype.down = function() {
  if (this.temperature > this.minTemp){
    this.temperature -= 1;
  }
};

Thermostat.prototype.togglePowerSavingMode = function() {
  if (this.maxTemp == 32){
    this.maxTemp = 25;
  } else {
    this.maxTemp = 32;
  }
};

Thermostat.prototype.reset = function() {
  this.temperature = 20;
};

Thermostat.prototype.status = function() {
  if (this.temperature < 18) {
    return "low-usage";
  } else if (this.temperature < 25) {
    return "medium-usage";
  } else {
    return "high-usage";
  }
};
