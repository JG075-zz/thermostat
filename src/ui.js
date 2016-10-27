$( document ).ready(function() {
  myThermo = new Thermostat();

  var update = function() {
  $('#temperature').html(myThermo.temperature);
  $('#power-saving-mode').html(myThermo.psm);
  $('#status').html(myThermo.status());
};

  update();

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
});
