String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

myThermo = new Thermostat();

var update = function() {
  $('#temperature').html(myThermo.temperature);
  $('#power-saving-mode').html(myThermo.psm);
  $('#status').html(myThermo.status());
};

var weather = function(city="london"){
  $('#cityName').html(city.capitalizeFirstLetter());
  myThermo.city = city;
  $.ajax({
    type:'GET',
    url:"http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=c2acf68f8c62606b5b06c3c51e245f19",
    data:"format=json",
    success:function(feed) {
        $('#temp').html((feed.main.temp - 273.15).toFixed() + " °C");
        $('#condition').html(feed.weather[0].description);
    },
    dataType:'jsonp'
  });
};

$.ajax({
  type:'GET',
  url:"http://localhost:4567/thermostat",
  data:"format=json",
  success:function(feed) {
    myThermo.temperature = feed.temperature;
    myThermo.city = feed.city;
    update();
    weather(myThermo.city);
  },
  dataType:'json',
});

$( document ).ready(function() {

  $( "#up" ).click(function( event ) {
      myThermo.up();
      update();
  });
  $( "#down" ).click(function( event ) {
      myThermo.down();
      update();
  });
  $( "#tpsm" ).click(function( event ) {
    myThermo.togglePowerSavingMode();
    update();
  });
  $( "#reset" ).click(function( event ) {
    myThermo.reset();
    update();
  });
  $( "#city" ).click(function( event ) {
    weather($('form').serializeArray()[0].value);
  });
  $( "#save" ).click(function( event ) {
    console.log(myThermo.temperature);
    console.log(myThermo.city);
    $.post("http://localhost:4567/thermostat", {temperature: myThermo.temperature, city: myThermo.city});
  });
});
