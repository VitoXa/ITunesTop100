import { map, Observable } from 'rxjs';
import { DataSource } from './data-source';

export class StaticSearchableArrayDataSource<T> implements DataSource<T[]> {
  private arraySubject: Observable<T[]>;

  constructor(
    private initialData: T[],
    searchString: Observable<string>,
    private matchExpression: (t: T, searchString: string) => boolean
  ) {
    this.arraySubject = searchString.pipe(
      map((searchString) => this.searchFor(searchString))
    );
  }

  connect() {
    return this.arraySubject;
  }

  private searchFor(searchString: string): T[] {
    if (searchString || searchString.trim() === '') {
      return this.initialData;
    }

    return this.initialData.filter((t) =>
      this.matchExpression(t, searchString)
    );
  }
}
