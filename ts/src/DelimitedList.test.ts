import {DelimitedList} from "./DelimitedList";

describe('DelimitedList', () => {

  test.each([
    ['\n1, 2, 3\n', [1, 2, 3]],
    ['1,2,3\n4,5', [1, 2, 3, 4, 5]],
    ['1, 2,3, 4,5\n', [1, 2, 3, 4, 5]],
    ['1, 23\n 4\n', [1, 23, 4]],
    ['12345', [12345]],
    [',12345,', [12345]],
    // Add more test cases here
  ])('constructs a list with standard delimiter for input %s', (input, expected) => {
    let list = DelimitedList.from(input);
    expect(list.elements).toEqual(expected);
  });

  test.each([
    ['\n1, 2,\n 3', "[,\n]"],
    [',,1, 2,\n 3', "[,,]"],
    ['\n\n1, 2,\n 3', "[\n\n]"],
    ['\n1, 2, 3,,', "[,,]"],
    ['\n1, 2,, 3', "[,,]"],
    // Add more test cases here
  ])('throws error if two standard delimiters in sequence for input %s', (input, expected) => {
    expect(() => DelimitedList.from(input)).toThrow("Invalid Delimiters in sequence " + expected);
  });

  test.each([
    ['//;\n1;2;3;4', [1, 2, 3, 4]],
    ['//x\n1x2x3x4', [1, 2, 3, 4]],
    ['//9\n1929394', [1, 2, 3, 4]],
  ])('constructs a list with custom delimiter for input %s', (input, expected) => {
    let list = DelimitedList.from(input);
    expect(list.elements).toEqual(expected);
  });
})

