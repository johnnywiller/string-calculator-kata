import {DelimiterBuilder} from "./DelimiterBuilder";

export class Delimiters {
  static standardDelimiter(): DelimiterBuilder {
    return new DelimiterBuilder()
      .withDelimiter(",")
      .withDelimiter("\n");
  }
}
