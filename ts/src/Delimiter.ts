export interface Delimiter {
  tokenise(c: string): { digit: string, delimiterStillUnfinished: boolean };
}
