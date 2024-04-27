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
    // Add more test cases here
  ])('returns correct sum for input %s', (input, expected) => {
    expect(calculator.add(input)).toBe(expected);
  });

});
