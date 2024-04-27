import {DelimiterBuilder} from "./DelimiterBuilder";

export class ListWalker {

  private listToWalk: string;
  private delimiterBuilder: DelimiterBuilder;

  constructor(stringList: string, delimiterBuilder: DelimiterBuilder) {
    this.listToWalk = stringList;
    this.delimiterBuilder = delimiterBuilder;
  }

  hasMoreElements() {
    return this.listToWalk.length > 0;
  }

  nextElement(): string {
    let delimiter = this.delimiterBuilder.build();
    let toReturn = "";
    let walked = 0;
    for (let c of this.listToWalk) {
      const tokenise = delimiter.tokenise(c);
      if (tokenise.canKeepTokenising) {
        toReturn += tokenise.element;
        walked++;
      } else {
        break;
      }
    }
    this.listToWalk = this.listToWalk.substring(walked);
    return toReturn;
  }
}
