export class DelimitedList {

  elements: number[];
  private static stringList: string;

  constructor(elements: number[]) {
    this.elements = elements;
  }

  static from(stringList: string): DelimitedList {
    const parts = stringList.split(/[,\n]/);
    const numbers = parts.map(value => Number(value));

    return new DelimitedList(numbers);
  }

  private static parseElements(standardDelimiter: string[]) {
    let regExp = new RegExp(standardDelimiter.join('|'));
    return this.stringList.split(regExp).map(value => Number(value));
  }

  private static parseCustomDelimiter(): string {
    const regExpMatchArray = this.stringList.match("//(.)\n");
    if (regExpMatchArray != null) {
      this.removeCustomDelimiter();
      return regExpMatchArray[1];
    }
    return "";
  }

  private static removeCustomDelimiter() {
    this.stringList = this.stringList.replace(/\/\/;\n/, "");
  }
}
