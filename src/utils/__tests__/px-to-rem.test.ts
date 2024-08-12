import { pxToRem } from "../px-to-rem";

describe("pxToRem util function", () => {
  it("should return a string", async () => {
    const value = pxToRem(16);
    expect(typeof value).toEqual("string");
  });
  it("should have rem as a unit value", async () => {
    const value = pxToRem(16);
    const remKeyword = value.slice(-3);
    expect(remKeyword).toEqual("rem");
  });
  it("should return accurate value", async () => {
    const value = pxToRem(16);
    expect(value).toEqual("1rem");
  });
  it("should handle empty args safely", async () => {
    const value = pxToRem();
    expect(value).toEqual("0rem");
  });
});
