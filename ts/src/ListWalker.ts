export interface ListWalker {
  hasMoreElements(): boolean;
  nextElement(): string;
}
