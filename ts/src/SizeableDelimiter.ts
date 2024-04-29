import {Delimiter} from "./Delimiter";

export class SizeableDelimiter implements Delimiter {

  private readonly allowedDelimiter: string;
  private length: number;

  constructor(delimiter: string, length: number) {
    this.allowedDelimiter = delimiter;
    this.length = length;
  }

  tokenise(c: string): { digit: string, delimiterStillUnfinished: boolean } {
    if (this.allowedDelimiter === c) {
      this.length--;
      return {delimiterStillUnfinished: true, digit: ""};
    } else {
      // TODO: add check for delimiter smaller than passed length
      return {delimiterStillUnfinished: this.length > 0, digit: c};
    }
  }
}
