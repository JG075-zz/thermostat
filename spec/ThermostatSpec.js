describe("Thermostat", function() {
  var myThermo;

  beforeEach(function() {
    myThermo = new Thermostat();
  });

  it("should start at 20 degrees", function() {
    expect(myThermo.temperature).toEqual(20);
  });

  it("allows temperature to be increased", function() {
    myThermo.up();
    expect(myThermo.temperature).toEqual(21);
  });

  it("allows temperature to be decreased", function() {
    myThermo.down();
    expect(myThermo.temperature).toEqual(19);
  });

  it("will not allow temperature to go below minimum", function() {
    myThermo.temperature = myThermo.minTemp;
    myThermo.down();
    expect(myThermo.temperature).toEqual(myThermo.minTemp);
  });
});
