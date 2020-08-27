const filter = require("../filter");

describe("filter", () => {
  test("function will return input with only one argument supplied", () => {
    expect(filter([10])).toEqual([40]);
  });

  test("function will return music and lower band, 2 arguments supplied", () => {
    expect(filter([2000])).toEqual([1000]);
  });

  test("function will return music and lower band, 2 arguments supplied", () => {
    expect(filter([10, 10])).toEqual([40, 40]);
  });
});
