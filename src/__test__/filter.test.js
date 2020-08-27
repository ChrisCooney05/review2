const filter = require("../filter");

describe("filter", () => {
  test("function will return input with only one argument supplied", () => {
    expect(filter(10)).toEqual(10);
  });
});
