import List from './model/list.js';
import { BAD_URLS } from '../shared/__url_fixtures.js';

// TODO for now, just populating it with the examples from fixtures
// TODO real deal: fetch from local files shipped with the extension, augment it with live sources...
// https://github.com/lfilho/sample-webextension/issues/24
// https://github.com/lfilho/sample-webextension/issues/18
// https://github.com/lfilho/sample-webextension/issues/17

export default class ListPopulator {
  static async populateList(list) {
    const listTypeToUrlMapper = {
      [List.types.DENY_LIST]: BAD_URLS,
    };
    const urls = listTypeToUrlMapper[list.type];
    list.bulkAdd(urls);

    //TODO https://github.com/lfilho/sample-webextension/issues/8
  }
}
