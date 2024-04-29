import {DelimiterBuilder} from "./DelimiterBuilder";

export class Delimiters {
  static standardDelimiter(): DelimiterBuilder {
    return new DelimiterBuilder()
      .withDelimiter(",")
      .withDelimiter("\n");
  }

  static for(stringList: string) {
    if (stringList.startsWith("//[")) {
      const extractDelimiter = Delimiters.extractDelimiter(stringList);
      return new DelimiterBuilder()
        .withSizeableDelimiter(extractDelimiter[0], extractDelimiter.length);
    }
    if (stringList.startsWith("//")) {
      return new DelimiterBuilder()
        .withDelimiter(stringList[2]);
    }
    return this.standardDelimiter();
  }

  private static extractDelimiter(stringList: string): string {
    const match = stringList.match(/^\/\/\[(.+)]\n/);
    if (match) {
      return match[1]; // match[1] is the first captured group
    }
    throw new Error("Invalid Delimiter");
  }
}
