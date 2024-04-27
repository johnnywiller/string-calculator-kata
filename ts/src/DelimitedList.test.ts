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

// it('constructs a list with custom delimiter and no numbers', () => {
//   let list = DelimitedList.from('//;\n');
//   expect(list.delimiters).toEqual([';']);
// });
//
//
// it('constructs a list with custom delimiter', () => {
//   let list = DelimitedList.from('//;\n1;2');
//   expect(list.delimiters).toEqual([';']);
//   expect(list.elements).toEqual([1, 2]);
// });
})

