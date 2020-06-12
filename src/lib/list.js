export default class List {
  /*
   * Using a Set and mainly proxying the methods to their native ones.
   * So if we change the underlaying data structure in the future,
   * the API stays the same and the impact on the codebase is minimal.
   */

  constructor(intialValues = null) {
    this.list = new Set(intialValues);
  }

  has(url) {
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
