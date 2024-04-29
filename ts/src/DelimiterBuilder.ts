import {OneCharDelimiter} from "./OneCharDelimiter";
import {Delimiter} from "./Delimiter";
import {SizeableDelimiter} from "./SizeableDelimiter";

export class DelimiterBuilder {
  private delimiters: string[] = [];
  private sizeable: boolean = false;

  withDelimiter(delimiter: string): DelimiterBuilder {
    this.delimiters.push(delimiter);
    return this;
  }

  withSizeableDelimiter(delimiter: string, length: number): DelimiterBuilder {
    this.sizeable = true;
    this.delimiters.push(delimiter);
    return this;
  }

  build(): Delimiter {
    if (this.sizeable) {
      return new SizeableDelimiter(this.delimiters);
    }
    return new OneCharDelimiter(this.delimiters);
  }
}
