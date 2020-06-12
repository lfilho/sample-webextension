import List from './list.js';

let denyList;

export default class RequestMatcher {
  static get denyList() {
    if (!denyList) {
      denyList = new List();
    }
    return denyList;
  }

  static isDenied(url) {
    return this.denyList.has(url);
  }
}
