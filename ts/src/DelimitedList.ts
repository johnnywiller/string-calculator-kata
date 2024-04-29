import {ListWalker} from "./ListWalker";
import {Delimiters} from "./Delimiters";

let allNumbersFilter = () => true;

export class DelimitedList {

  elements: number[];

  constructor(elements: number[]) {
    this.elements = elements;
  }

  static from(stringList: string, numberFilter: (n: number) => boolean = allNumbersFilter): DelimitedList {
    let numbers = DelimitedList.loadNumbersFrom(stringList, numberFilter);
    return new DelimitedList(numbers);
  }

  private static loadNumbersFrom(stringList: string, numberFilter: (n: number) => boolean) {
    let numbers = [];
    const listWalker = new ListWalker(stringList, Delimiters.for(stringList));
    // TODO: Refactor this to use Iterator on ListWalker
    while (listWalker.hasMoreElements()) {
      let element = listWalker.nextElement();
      let number = Number.parseInt(element);
      if (DelimitedList.isValid(number, numberFilter)) {
        numbers.push(number);
      }
    }
    return numbers;
  }

  sum() {
    return this.elements.reduce((a, b) => a + b, 0);
  }

  negatives() {
    return this.elements.filter(n => n < 0);
  }

  private static isValid(number: number, numberFilter: (n: number) => boolean) {
    return Number.isInteger(number) && numberFilter(number);
  }
}
