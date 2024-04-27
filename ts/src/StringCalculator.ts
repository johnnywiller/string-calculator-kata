import {DelimitedList} from "./DelimitedList";

export class StringCalculator {
  /**
   * Calculate a sum from a string of numbers.
   *
   * @param {string} stringNumbers
   * @return {number}
   */
  public add(stringNumbers: string): number {
    if (stringNumbers.length === 0) {
      return 0;
    }

    return DelimitedList.from(stringNumbers).sum();
  }
}
