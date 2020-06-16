import List from './model/list.js';
import { BAD_URLS, GOOD_URLS } from '../shared/__url_fixtures.js';

// TODO for now, just populating it with the examples from fixtures
// TODO real deal: fetch from local files shipped with the extension, augment it with live sources...
// https://github.com/lfilho/ddg-test-project/issues/24
// https://github.com/lfilho/ddg-test-project/issues/18
// https://github.com/lfilho/ddg-test-project/issues/17

const LIST_TYPE_TO_URL_MAPPER = {
  [List.types.DENY_LIST]: BAD_URLS,
  [List.types.ALLOW_LIST]: GOOD_URLS,
};

export default class ListPopulator {
  static async populateList(list) {
    const urls = LIST_TYPE_TO_URL_MAPPER[list.type];
    list.bulkAdd(urls);
  }
}
