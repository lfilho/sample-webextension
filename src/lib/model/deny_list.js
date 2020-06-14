import List from './list.js';

export default class DenyList extends List {
  constructor() {
    super(List.types.DENY_LIST);
  }
}
