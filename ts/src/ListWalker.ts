import {DelimiterBuilder} from "./DelimiterBuilder";

export class ListWalker {

  private stringList: string;
  private delimiterBuilder: DelimiterBuilder;

  constructor(stringList: string, delimiterBuilder: DelimiterBuilder) {
    this.stringList = stringList;
    this.delimiterBuilder = delimiterBuilder;
  }

  hasMoreElements() {
    return this.stringList.length > 0;
  }

  nextElement(): string {
    let delimiter = this.delimiterBuilder.build();
    let toReturn = "";
    let walked = 0;
    for (let c of this.stringList) {
      const tokenise = delimiter.tokenise(c);
      if (tokenise.canKeepTokenising) {
        toReturn += tokenise.element;
        walked++;
      } else {
        break;
      }
    }
    this.stringList = this.stringList.substring(walked);
    return toReturn;
  }
}
