import {OneCharDelimiter} from "./OneCharDelimiter";
import {Delimiter} from "./Delimiter";
import {SizeableDelimiter} from "./SizeableDelimiter";

export class DelimiterBuilder {
  private delimiters: string[] = [];
  private sizeable: boolean = false;
  private length: number = 0;

  withDelimiter(delimiter: string): DelimiterBuilder {
    this.delimiters.push(delimiter);
    return this;
  }

  withSizeableDelimiter(delimiter: string, length: number): DelimiterBuilder {
    if (length <= 0) {
      throw new Error("Length must be greater than 0");
    }
    this.length = length;
    this.sizeable = true;
    this.delimiters.push(delimiter);
    return this;
  }

  build(): Delimiter {
    if (this.sizeable) {
      return new SizeableDelimiter(this.delimiters[0], this.length);
    }
    return new OneCharDelimiter(this.delimiters);
  }
}
