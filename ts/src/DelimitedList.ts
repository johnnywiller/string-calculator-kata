

class Delimiters {
  static standardDelimiter(): DelimiterBuilder {
    return new DelimiterBuilder()
      .withDelimiter(",")
      .withDelimiter("\n");
  }
}

class DelimiterBuilder {
  private delimiters: string[] = [];

  withDelimiter(delimiter: string): DelimiterBuilder {
    this.delimiters.push(delimiter);
    return this;
  }

  build(): Delimiter {
    return new Delimiter(this.delimiters);
  }
}

class Delimiter {
  private readonly allowedDelimiters: string[];
  private currentDelimiter: string = "";

  constructor(delimiters: string[]) {
    this.allowedDelimiters = delimiters;
  }

  tokenise(c: string): {element: string, canKeepTokenising: boolean} {
    if (this.allowedDelimiters.includes(c)) {
      this.currentDelimiter += c;
      return {canKeepTokenising: true, element: ""};
    } else {
      return {canKeepTokenising: this.currentDelimiter.length == 0, element: c};
    }
  }
}

class ListWalker {

  private stringList: string;
  private delimiterBuilder: DelimiterBuilder;

  constructor(stringList: string, delimiter: DelimiterBuilder) {
    this.stringList = stringList;
    this.delimiterBuilder = delimiter;
  }

  hasMoreElements() {
    return this.stringList.length > 0;
  }

  nextNumber(): number {
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
    return Number.parseInt(toReturn);
  }
}

export class DelimitedList {

  elements: number[];
  private static stringList: string;

  constructor(elements: number[]) {
    this.elements = elements;
  }

  static from(stringList: string): DelimitedList {
    const listWalker = new ListWalker(stringList, Delimiters.standardDelimiter());
    let elements = [];

    while (listWalker.hasMoreElements()) {
      elements.push(listWalker.nextNumber());
    }

    return new DelimitedList(elements);
  }
}
