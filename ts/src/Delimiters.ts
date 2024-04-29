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
    if (stringList.startsWith("//[")) {
      var extractDelimiter = Delimiters.extractDelimiter(stringList);
      return new DelimiterBuilder()
        .withDelimiter(stringList[2]);
    }
    return this.standardDelimiter();
  }

  private static extractDelimiter(stringList: string): string | null {
    const match = stringList.match(/^\/\/\[(.+)]\n/);
    if (match) {
      return match[1]; // match[1] is the first captured group
    }
    return null; // return null if no match found
  }
}
