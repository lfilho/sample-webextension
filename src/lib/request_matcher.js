import DenyList from './model/deny_list.js';

let denyList;

export default class RequestMatcher {
  static get denyList() {
    if (!denyList) {
      denyList = new DenyList();
    }
    return denyList;
  }

  static isDenied(url) {
    return this.denyList.has(url);
  }
}
