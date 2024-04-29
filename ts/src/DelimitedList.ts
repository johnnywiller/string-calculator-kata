import {DelimitedListWalker} from "./DelimitedListWalker";
import {Delimiters} from "./Delimiters";
import {FilteredListWalker} from "./FilteredListWalker";

let allNumbersFilter = (n: number) => n;

export class DelimitedList {

  elements: number[];

  // TODO: move this function to a more appropriate place
  private static ignoreNonNumbersFilter: ((element: string | null) => string | null) = (element) => {
    if (element === null) {
      return null;
    }
    return element.replace(/[^\d-]/g, '');
  };

  constructor(elements: number[]) {
    this.elements = elements;
  }

  static from(stringList: string, numberFilter: (n: number) => number = allNumbersFilter): DelimitedList {
    let numbers = DelimitedList.loadNumbersFrom(stringList, numberFilter);
    return new DelimitedList(numbers);
  }

  private static loadNumbersFrom(stringList: string, numberFilter: (n: number) => number) {
    let numbers = [];
    const listWalker = DelimitedList.getListWalker(stringList, numberFilter);
    // TODO: Refactor this to use Iterator on ListWalker
    while (listWalker.hasMoreElements()) {
      let element = listWalker.nextElement();
      // TODO: improve this
      let number = Number.parseInt(element);
      if (Number.isInteger(number)) {
        numbers.push(number);
      }
    }
    return numbers;
  }

  private static getListWalker(stringList: string, numberFilter: (n: number) => number) {
    const listWalker = new DelimitedListWalker(stringList, Delimiters.for(stringList));
    return new FilteredListWalker(listWalker, [this.ignoreNonNumbersFilter, numberFilter]);
  }

  sum() {
    return this.elements.reduce((a, b) => a + b, 0);
  }

  negatives() {
    return this.elements.filter(n => n < 0);
  }
}
