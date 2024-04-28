import {DelimiterBuilder} from "./DelimiterBuilder";

export class Delimiters {
  static standardDelimiter(): DelimiterBuilder {
    return new DelimiterBuilder()
      .withDelimiter(",")
      .withDelimiter("\n");
  }

  static for(stringList: string) {
    if (stringList.startsWith("//")) {
      return new DelimiterBuilder()
        .withDelimiter(stringList[2]);
    }
    return this.standardDelimiter();
  }
}
