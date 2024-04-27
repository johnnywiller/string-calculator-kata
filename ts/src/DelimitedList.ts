import {ListWalker} from "./ListWalker";
import {Delimiters} from "./Delimiters";

export class DelimitedList {

  elements: number[];

  constructor(elements: number[]) {
    this.elements = elements;
  }

  static from(stringList: string): DelimitedList {
    const listWalker = new ListWalker(stringList, Delimiters.standardDelimiter());
    let numbers: number[] = [];

    // TODO: Refactor this to use Iterator on ListWalker
    while (listWalker.hasMoreElements()) {
      let element = listWalker.nextElement();
      let number = Number.parseInt(element);
      if (Number.isInteger(number)) {
        numbers.push(number);
      }
    }
    return new DelimitedList(numbers);
  }

  sum() {
    return this.elements.reduce((a, b) => a + b, 0);
  }
}
