import { calcuate_safety } from './day_two';

describe('Day 2 Solutions', () => {
  it('should return the correct output for example input 1', () => {
    const input: number[] = [1, 2, 3, 4, 5]
    expect(calcuate_safety(input)).toBe(true);
  });
  it('should return the correct output for example input 2', () => {
    const input: number[] = [5, 4, 3, 2, 1]
    expect(calcuate_safety(input)).toBe(true);
  });
  it('should return the correct output for example input 3', () => {
    const input: number[] = [1, 2, 3, 3, 5]
    expect(calcuate_safety(input)).toBe(false);
  });
  it('should return the correct output for example input 4', () => {
    const input: number[] = [5, 3, 3, 2, 1]
    expect(calcuate_safety(input)).toBe(false);
  });
  it('should return the correct output for example input 5', () => {
    const input: number[] = [15, 4, 3, 2, 1]
    expect(calcuate_safety(input)).toBe(false);
  });
  it('should return the correct output for example input 6', () => {
    const input: number[] = [2, 4, 5, 7, 15]
    expect(calcuate_safety(input)).toBe(false);
  });
});
