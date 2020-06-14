import List from './list.js';

export default class AllowList extends List {
  constructor() {
    super(List.types.ALLOW_LIST);
  }
}
