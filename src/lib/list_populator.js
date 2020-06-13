import List from './model/list.js';
import { BAD_URLS } from '../../__tests__/shared/__url_fixtures.js';

export default class ListPopulator {
  static populateList(list) {
    if (list.type === List.types.DENY_LIST) {
      // TODO for now, just populating it with the examples from fixtures
      // TODO real deal: fetch from local files shipped with the extension, augment it with live sources...
      // https://github.com/lfilho/ddg-test-project/issues/24
      // https://github.com/lfilho/ddg-test-project/issues/18
      // https://github.com/lfilho/ddg-test-project/issues/17
      list.bulkAdd(BAD_URLS);
    } else if (list.type === List.types.ALLOW_LIST) {
      //TODO https://github.com/lfilho/ddg-test-project/issues/8
    }
  }
}
