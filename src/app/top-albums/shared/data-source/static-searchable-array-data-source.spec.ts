import { StaticSearchableArrayDataSource } from './static-searchable-array-data-source';
import { getTestScheduler } from 'jasmine-marbles';

describe('StaticSearchableArrayDataSource', () => {
  const initialData = ['Adrian', 'Kelly', 'Niamh', 'Sean', 'Stephen'];
  const matchExpression = (v: string, s: string) => v.search(s) !== -1;

  it('should emit all data if no search value passed', () => {
    getTestScheduler().run((helpers) => {
      // Arrange
      const { expectObservable, cold } = helpers;
      const dataSource = new StaticSearchableArrayDataSource(
        initialData,
        matchExpression,
        cold('a', { a: '' })
      );

      // Act.Assert
      expectObservable(dataSource.connect()).toBe('i', { i: initialData });
    });
  });

  it('should emit searched data if search value added', () => {
    getTestScheduler().run((helpers) => {
      // Arrange
      const { expectObservable, cold } = helpers;
      const dataSource = new StaticSearchableArrayDataSource(
        initialData,
        matchExpression,
        cold('a-b', { a: '', b: 'ia' })
      );

      // Act/Assert
      expectObservable(dataSource.connect()).toBe('a-b', {
        a: initialData,
        b: ['Adrian', 'Niamh'],
      });
    });
  });

  it('should trim search string', () => {
    getTestScheduler().run((helpers) => {
      // Arrange
      const { expectObservable, cold } = helpers;
      const dataSource = new StaticSearchableArrayDataSource(
        initialData,
        matchExpression,
        cold('a-b', { a: '        ', b: '  ' })
      );

      // Act/Assert
      expectObservable(dataSource.connect()).toBe('a-b', {
        a: initialData,
        b: initialData,
      });
    });
  });
});
