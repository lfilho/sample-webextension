import DenyList from './model/deny_list.js';
import ListPopulator from './list_populator.js';

let denyList;

export default class RequestMatcher {
  static get denyList() {
    if (!denyList) {
      denyList = new DenyList();
      ListPopulator.populateList(denyList);
    }
    return denyList;
  }

  static isDenied(url) {
    return this.denyList.has(url);
  }
}
