import {Delimiter} from "./Delimiter";

export class DelimiterBuilder {
  private delimiters: string[] = [];

  withDelimiter(delimiter: string): DelimiterBuilder {
    this.delimiters.push(delimiter);
    return this;
  }

  build(): Delimiter {
    return new Delimiter(this.delimiters);
  }
}
