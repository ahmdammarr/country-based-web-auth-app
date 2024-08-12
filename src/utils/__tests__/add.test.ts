import { sum } from "../sum";

test("Test functions that import server-only", () => {
  expect(sum(1, 2)).toBe(3);
});
