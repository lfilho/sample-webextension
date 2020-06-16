export default class List {
  /*
   * Using a Set and mainly proxying the methods to their native ones.
   * So if we change the underlaying data structure in the future,
   * the API stays the same and the impact on the codebase is minimal.
   */

  constructor() {
    this.list = new Set();
  }

  static get types() {
    return Object.freeze({
      DENY_LIST: 'DENY',
      ALLOW_LIST: 'ALLOW',
    });
  }

  matches(url) {
    // Look kid, one day there will be a complex algorithm here.
    // For now, full matches only. In future iterations,
    // we should support patterns instead, like: *evil-tracker.com/*
    return this.list.has(url);
  }

  add(url) {
    this.list.add(url);
  }

  remove(url) {
    this.list.delete(url);
  }

  clear() {
    this.list.clear();
  }

  get size() {
    return this.list.size;
  }

  bulkAdd(values) {
    values.forEach(this.list.add.bind(this.list));
  }
}
