import {DelimiterBuilder} from "./DelimiterBuilder";
import {Delimiter} from "./Delimiter";

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
    const step = this.walkNextElement(delimiter);
    this.cleanHeadOfList(step.walked);
    return step.element;
  }

  private walkNextElement(delimiter: Delimiter) {
    let walked = 0;
    let toReturn: string = "";
    for (let c of this.listToWalk) {
      const tokenise = delimiter.tokenise(c);
      if (tokenise.canKeepTokenising) {
        toReturn += tokenise.element;
        walked++;
      } else {
        break;
      }
    }
    return {walked: walked, element: toReturn};
  }

  private cleanHeadOfList(walked: number) {
    this.listToWalk = this.listToWalk.substring(walked);
  }
}
