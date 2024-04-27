import {DelimitedList} from "./DelimitedList";

describe('DelimitedList', () => {

  it('constructs a list with common delimiter', () => {
    let list = DelimitedList.from('1, 2, 3, 4, 5');
    // expect(list.delimiters).toBe([',']);
    expect(list.elements).toEqual([1, 2, 3, 4, 5]);
  });

  // it('constructs a list with custom delimiter and no numbers', () => {
  //   let list = DelimitedList.from('//;\n');
  //   expect(list.delimiters).toEqual([';']);
  // });
  //
  // it('constructs a list with multiple common delimiters', () => {
  //   let list = DelimitedList.from('\n1, 2, 3\n 4, 5');
  //   expect(list.delimiters).toEqual([',\n']);
  //   expect(list.elements).toEqual([1, 2, 3, 4, 5]);
  // });
  //
  // it('constructs a list with custom delimiter', () => {
  //   let list = DelimitedList.from('//;\n1;2');
  //   expect(list.delimiters).toEqual([';']);
  //   expect(list.elements).toEqual([1, 2]);
  // });
});
