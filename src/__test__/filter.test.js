const filter = require("../filter");

describe("filter", () => {
  test("function will return input with only one argument supplied", () => {
    expect(filter(10)).toEqual("10 40 1000");
  });

  test("function will return music and lower band, 2 arguments supplied", () => {
    expect(filter(10, 50)).toEqual("10 50 1000");
  });

  test("function will return music, lower band and upper band, 3 arguments supplied", () => {
    expect(filter(10, 50, 2000)).toEqual("10 50 2000");
  });
});
