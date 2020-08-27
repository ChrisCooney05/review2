const filter = require("../filter");

describe("filter", () => {
  test("function will return input with only one argument supplied", () => {
    expect(filter(10)).toEqual("10 40");
  });

  test("function will return music and lower band, 2 arguments supplied", () => {
    expect(filter(10, 50)).toEqual("10 50");
  });
});
