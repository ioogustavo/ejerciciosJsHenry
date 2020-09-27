const { findNeedle, findNeedle2 } = require("../homework.js");

describe("FindNeedle()", function () {
  it("Should return 6", function () {
    expect(findNeedle("react-redux", "redux")).toBe(6);
  });
  it("Should return -1", function () {
    expect(findNeedle("pinky", "puntual")).toBe(-1);
  });
});

describe("FindNeedle2()", function () {
  it("Should return 6", function () {
    expect(findNeedle2("react-redux", "redux")).toBe(6);
  });
  it("Should return -1", function () {
    expect(findNeedle2("pinky", "puntual")).toBe(-1);
  });
});
