export class Delimiter {

  private readonly allowedDelimiters: string[];
  private currentDelimiter: string = "";

  constructor(delimiters: string[]) {
    this.allowedDelimiters = delimiters;
  }

  tokenise(c: string): { element: string, canKeepTokenising: boolean } {
    if (this.allowedDelimiters.includes(c)) {
      this.checkForSequencedDelimiters(c);
      this.currentDelimiter += c;
      return {canKeepTokenising: true, element: ""};
    } else {
      return {canKeepTokenising: this.currentDelimiter.length == 0, element: c};
    }
  }

  private checkForSequencedDelimiters(c: string) {
    if (this.currentDelimiter.length > 0) {
      throw new Error("Invalid Delimiters in sequence [" + this.currentDelimiter + c + "]");
    }
  }
}
