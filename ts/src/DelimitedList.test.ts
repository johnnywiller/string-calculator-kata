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

  test.each([
    ['1000, 1, 2, 3', [1000, 1, 2, 3]],
    ['//x\n1000x1x2x3', [1000, 1, 2, 3]],
    ['1001, 1, 2, 3', [1, 2, 3]],
    ['1, 1001, 2, 3', [1, 2, 3]],
    ['1, 2, 3, 1001', [1, 2, 3]],
    ['1001, 1, 2, 3, 1001', [1, 2, 3]],
  ])('filters numbers bigger than 1000 for input %s', (input, expected) => {
    let biggerThanThousandFilter = (n: number) => n <= 1000 ? n : NaN;
    let list = DelimitedList.from(input, biggerThanThousandFilter);
    expect(list.elements).toEqual(expected);
  });

  test.each([
    ['//[}]\n1}2}3', [1, 2, 3]],
    ['//[**]\n1**2**3', [1, 2, 3]],
    ['//[;;;]\n1;;;2;;;3', [1, 2, 3]],
  ])('constructs a list with custom delimiter of any length for input %s', (input, expected) => {
    let list = DelimitedList.from(input);
    expect(list.elements).toEqual(expected);
  });
})

