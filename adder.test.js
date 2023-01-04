import { sum } from "./adder";

describe("sum", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it("проверка sum", () => {
    expect(sum(1)()).toBe(1);
    expect(sum(1)(2)()).toBe(3);
    expect(sum(3)(4)(5)()).toBe(12);
  });
});
