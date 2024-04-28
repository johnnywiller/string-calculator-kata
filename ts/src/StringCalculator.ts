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

    let delimitedList = DelimitedList.from(stringNumbers);
    this.requireOnlyPositives(delimitedList);
    return delimitedList.sum();
  }

  // TODO: This policy is implemented as a method here,
  //  but encapsulating into a new object or
  //  blending the policy into objects life cycle directly would be better.
  private requireOnlyPositives(delimitedList: DelimitedList) {
    let negatives = delimitedList.negatives();
    if (negatives.length > 0) {
      throw new Error("Negatives not allowed: " + negatives.join(" "));
    }
  }
}
