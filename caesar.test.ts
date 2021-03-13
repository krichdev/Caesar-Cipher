import { cipher } from "./index";

describe("Caesar Cipher", () => {
  it("No shift", function () {
    const input = "HELLO WORLD";
    const output = "HELLO WORLD";

    let result = cipher(input, 0);
    expect(result).toBe(output);
  });

  it("Shifts right, in range", () => {
    const input = "ABC";
    const output = "DEF";

    let result = cipher(input, 3);
    expect(result).toBe(output);
  });

  it("Shifts left, in range", () => {
    const input = "DEF";
    const output = "ABC";

    let result = cipher(input, -3);
    expect(result).toBe(output);
  });

  it("Shifts right, out of range", () => {
    const input = "XYZ";
    const output = "ABC";

    let result = cipher(input, 3);
    expect(result).toBe(output);
  });

  it("Shifts left, out of range", () => {
    const input = "ABC";
    const output = "XYZ";

    let result = cipher(input, -3);
    expect(result).toBe(output);
  });

  it("Shift is greater than 26", () => {
    const input = "ABC";
    const output = "DEF";

    let result = cipher(input, 29);
    expect(result).toBe(output);
  });

  it("Shift is greater than 26", () => {
    const input = "ABC";
    const output = "DEF";

    let result = cipher(input, 29);
    expect(result).toBe(output);
  });

  it("Returns all characters with no shift", () => {
      const input = "%^&";
      const output = "%^&";

      let result = cipher(input, 7);
      expect(result).toBe(output);
  })
});
