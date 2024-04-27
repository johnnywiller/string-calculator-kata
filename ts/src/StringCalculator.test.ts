import {StringCalculator} from "./StringCalculator";

describe('StringCalculator', () => {
  let calculator = new StringCalculator();

  it('returns zero when empty string', () => {
    expect(calculator.add('')).toBe(0);
  });

  it('returns zero when comma only', () => {
    expect(calculator.add(',')).toBe(0);
  });

  it('returns zero when multiple commas', () => {
    expect(calculator.add(',,,')).toBe(0);
  });

  it('returns a sum of 1', () => {
    expect(calculator.add('1')).toBe(1);
  });

  it('returns a sum of 1 and comma', () => {
    expect(calculator.add('1,')).toBe(1);
  })

  it('returns a sum of comma and 1', () => {
    expect(calculator.add(',1')).toBe(1);
  })

  it('returns a sum of 1 + 2', () => {
    expect(calculator.add('1,2')).toBe(3);
  });

  it('returns a sum of 1 + 2 + 4', () => {
    expect(calculator.add('1,2,4')).toBe(7);
  });

  it('returns a sum of 1 + 2 + 3 with new line', () => {
    expect(calculator.add("1\n2,3")).toBe(6);
  });

  it('returns a sum of 1 + 2 with a custom delimiter', () => {
    expect(calculator.add('//;\\n1;2')).toBe(3);
  });
});
