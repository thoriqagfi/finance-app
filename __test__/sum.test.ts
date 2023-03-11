import { describe, expect, test } from "@jest/globals";
import { sum } from "@/pages/sum";

describe('sum module', () => {
  test(`sum(1, 2) should return 3`, () => {
    expect(sum(1, 2)).toBe(3)
  })
})