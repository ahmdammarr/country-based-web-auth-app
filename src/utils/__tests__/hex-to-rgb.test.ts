import { hexToRgb } from "../hex-to-rgb";
import { COLORS } from "@core/enums";

describe("hexToRem util function", () => {
  it("should return a string", async () => {
    const value = hexToRgb(COLORS["brik-25"]);
    expect(typeof value).toEqual("string");
  });
  it("should return correct rgp value", async () => {
    const black = hexToRgb(COLORS["system-black"]);
    const grey = hexToRgb(COLORS["grey-200"]);
    expect(black).toEqual("rgb(35 35 35)");
    expect(grey).toEqual("rgb(121 121 121)");
  });
});
