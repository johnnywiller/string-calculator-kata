import {DelimiterBuilder} from "./DelimiterBuilder";
import {Delimiter} from "./Delimiter";

export class DelimitedListWalker {

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
    const step = this.walkUntilEndOf(delimiter);
    this.cleanHeadOfList(step.walked);
    return step.element;
  }

  private walkUntilEndOf(delimiter: Delimiter) {
    let walked = 0;
    let toReturn: string = "";
    for (let digit of this.listToWalk) {
      const token = delimiter.tokenise(digit);
      // TODO: I dislike this design because it's the other obj who is telling if this can keep iterating
      if (token.delimiterStillUnfinished) {
        toReturn += token.digit;
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
