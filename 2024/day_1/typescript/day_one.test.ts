import { calculate_distance } from './day_one';

describe('Day 1 Solutions', () => {
  it('should return the correct output for example input', () => {
    const one = [3, 4, 2, 1, 3, 3]
    const two = [4, 3, 5, 3, 9, 3]
    expect(calculate_distance(one, two)).toBe(11);
  });
});
