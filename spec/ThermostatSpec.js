describe("Thermostat", function() {
  var myThermo;

  beforeEach(function() {
    myThermo = new Thermostat();
  });

  it("should be start at 20 degrees", function() {
    expect(myThermo.temperature).toEqual(20);
  });
});
