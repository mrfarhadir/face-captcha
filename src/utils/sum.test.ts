import { sum } from "./sum"

describe('test sum', () => {
  test('should add 2 and 3 to be 5', () => {
    expect(sum(2, 3)).toBe(5)
  })
})
