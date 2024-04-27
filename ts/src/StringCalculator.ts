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

    // const [delimieter, numbers]


    const numbers = this.listify(stringNumbers);

    return numbers.reduce((acc, value) => acc + value, 0)
  }

  private listify(stringNumbers: string) {
    const delimiter = /\n|,/;
    return stringNumbers.split(delimiter).map(value => Number(value));
  }
}
