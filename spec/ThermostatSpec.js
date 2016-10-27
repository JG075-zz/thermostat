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
});
