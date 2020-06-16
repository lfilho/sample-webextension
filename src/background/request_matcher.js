import AllowList from './model/allow_list.js';
import DenyList from './model/deny_list.js';
import ListPopulator from './list_populator.js';

// Singletons.
// Meaning since the extension will run on background,
// we will only load those lists once, saving memory
let denyList, allowList;

export default class RequestMatcher {
  static get allowList() {
    if (!allowList) {
      allowList = new AllowList();
      ListPopulator.populateList(allowList);
    }

    return allowList;
  }

  static get denyList() {
    if (!denyList) {
      denyList = new DenyList();
      ListPopulator.populateList(denyList);
    }

    return denyList;
  }

  static isDenied(url) {
    // Allow list implies a user's deliberate action to allow that url
    // Hence the precedence below
    if (this.allowList.matches(url)) {
      return false;
    }

    return this.denyList.matches(url);
  }
}
