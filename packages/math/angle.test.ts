import { cartesian2Polar, polar, radians } from "./angle";
import { point } from "./point";

describe("cartesian to polar coordinate conversion", () => {
  it("converts values properly", () => {
    expect(cartesian2Polar(point(12, 5))).toEqual(
      polar(13, radians(Math.atan(5 / 12))),
    );
    expect(cartesian2Polar(point(5, 5))).toEqual(
      polar(5 * Math.sqrt(2), radians(Math.PI / 4)),
    );
  });
});