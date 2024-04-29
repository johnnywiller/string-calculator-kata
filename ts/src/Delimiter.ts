// We can think as Strategy Pattern
export interface Delimiter {
  tokenise(c: string): { digit: string, delimiterStillUnfinished: boolean };
}
