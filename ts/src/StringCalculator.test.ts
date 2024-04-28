import {StringCalculator} from "./StringCalculator";

describe('StringCalculator', () => {

  let calculator = new StringCalculator();

  test.each([
    ['', 0],
    [',', 0],
    ['1,', 1],
    ['1,2', 3],
    [',5,', 5],
    ['5\n', 5],
    ['\n5\n5,', 10],
    ['//9\n1929394', 10],
    ['//x\n1x2x3x4', 10],
  ])('returns correct sum for input %s', (input, expected) => {
    expect(calculator.add(input)).toBe(expected);
  });

  it('does not accept negative numbers', () => {
    expect(() => calculator.add('1,-2,3,-5')).toThrow("Negatives not allowed: -2 -5");
  });

});
