import {Delimiter} from "./Delimiter";

export class SizeableDelimiter implements Delimiter {

  private readonly allowedDelimiters: string[];
  private currentDelimiter: string = "";

  constructor(delimiters: string[]) {
    this.allowedDelimiters = delimiters;
  }

  tokenise(c: string): { digit: string, delimiterStillUnfinished: boolean } {
    if (this.allowedDelimiters.includes(c)) {
      this.checkForSequencedDelimiters(c);
      this.currentDelimiter += c;
      return {delimiterStillUnfinished: true, digit: ""};
    } else {
      return {delimiterStillUnfinished: this.currentDelimiter.length == 0, digit: c};
    }
  }

  private checkForSequencedDelimiters(c: string) {
    if (this.currentDelimiter.length > 0) {
      throw new Error("Invalid Delimiters in sequence [" + this.currentDelimiter + c + "]");
    }
  }
}
