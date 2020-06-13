import List from '../../../src/lib/list.js';
import { A_URL, ANOTHER_URL, SOME_URLS } from '../../shared/__url_fixtures.js';

let list;

beforeEach(() => {
  list = new List();
});

describe('List', () => {
  it('should add an url to the list', () => {
    const originalListSize = list.size;
    list.add(A_URL);
    expect(list.size).toBe(originalListSize + 1);
  });

  it('should not add duplicate urls to the list', () => {
    const originalListSize = list.size;
    list.add(A_URL);
    list.add(A_URL);
    expect(list.size).toBe(originalListSize + 1);
  });

  it('should remove an url from the list', () => {
    const originalListSize = list.size;
    list.add(A_URL);
    list.remove(A_URL);
    expect(list.size).toBe(originalListSize);
  });

  it('should tell if an url is on the list', () => {
    list.add(A_URL);
    expect(list.has(A_URL)).toBe(true);
    expect(list.has(ANOTHER_URL)).toBe(false);
  });

  it('should clear the list', () => {
    list.add(A_URL);
    list.add(ANOTHER_URL);
    list.clear();
    expect(list.size).toBe(0);
  });

  it('should return the size of the list', () => {
    expect(list.size).toBe(0);
    list.add(A_URL);
    expect(list.size).toBe(1);
    list.add(ANOTHER_URL);
    expect(list.size).toBe(2);
  });

  it('should add several urls at once', () => {
    expect(list.size).toBe(0);
    list.bulkAdd(SOME_URLS);
    expect(list.size).toBe(SOME_URLS.length);

    list = new List(SOME_URLS);
    expect(list.size).toBe(SOME_URLS.length);
  });
});
