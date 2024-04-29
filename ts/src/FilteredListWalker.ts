// This is a Decorator Pattern
import {ListWalker} from "./ListWalker";

export class FilteredListWalker implements ListWalker {

  private delegate: ListWalker;
  // TODO: fix this function not have so many nulls
  private filters: ((element: string | null) => any | null)[];

  constructor(listWalker: ListWalker,
              filters: ((element: any | null) => any | null)[]) {
    this.delegate = listWalker;
    this.filters = filters;
  }

  hasMoreElements(): boolean {
    return this.delegate.hasMoreElements();
  }

  nextElement(): any {
    let element: string | null = this.delegate.nextElement();
    // TODO: this is looking a bit ugly as right now
    for (let filter of this.filters) {
      element = filter(element);
    }
    return element;
  }
}
