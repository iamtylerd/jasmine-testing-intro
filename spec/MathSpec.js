// add()
// subtract()
// multiply()
// divide()
// square()
// squareRoot()

describe("The specification for basic math", function() {

  it("should have an add function", function() {
    expect(add).toBeDefined();
  });

  it("should add two integers", function() {
    expect(add(2, 5)).toBe(7);
  });

  it("should have a subtract function", function() {
    expect(subtract).toBeDefined();
  });

  it("should subtract two integers", function() {
    expect(subtract(7, 5)).toBe(2);
  });
   it("should have an multiply function", function() {
    expect(multiply).toBeDefined();
  });

  it("should multiply two integers", function() {
    expect(multiply(2, 5)).toBe(10);
  });
   it("should have an divide function", function() {
    expect(divide).toBeDefined();
  });

  it("should divide two integers", function() {
    expect(divide(10, 2)).toBe(5);
  });
   it("should have an square function", function() {
    expect(square).toBeDefined();
  });

  it("should square two integers", function() {
    expect(square(2)).toBe(4);
  });
   it("should have an squareRoot function", function() {
    expect(squareroot).toBeDefined();
  });

  it("should squareRoot two integers", function() {
    expect(squareRoot(64)).toBe(8);
  });

});