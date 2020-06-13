import path from 'path';

const HTML_PAGES_PATH = `${process.cwd()}/__tests__/shared/`;
const TEST_PAGE_PATH = `${HTML_PAGES_PATH}/test_page.html`;
const GOOD_PAGE_PATH = `${HTML_PAGES_PATH}/good_page.html`;
const BAD_PAGE_PATH = `${HTML_PAGES_PATH}/bad_page.html`;

const A_URL = 'https://example.com';
const GOOD_URL = 'https://duckduckgo.com';
const BAD_URL = 'https://evil-tracker.com';
const ANOTHER_URL = GOOD_URL;
const SOME_URLS = [A_URL, ANOTHER_URL, BAD_URL];
const LOCAL_TEST_PAGE_URL = getUrlFromFilePath(TEST_PAGE_PATH);
const LOCAL_GOOD_PAGE_URL = getUrlFromFilePath(GOOD_PAGE_PATH);
const LOCAL_BAD_PAGE_URL = getUrlFromFilePath(BAD_PAGE_PATH);
const BAD_URLS = [BAD_URL, LOCAL_BAD_PAGE_URL, 'https://facebook.com'];
const GOOD_URLS = [GOOD_URL, LOCAL_GOOD_PAGE_URL, 'https://eff.org'];

export {
  A_URL,
  GOOD_URL,
  BAD_URL,
  ANOTHER_URL,
  SOME_URLS,
  LOCAL_TEST_PAGE_URL,
  LOCAL_GOOD_PAGE_URL,
  LOCAL_BAD_PAGE_URL,
  BAD_URLS,
  GOOD_URLS,
};

function getUrlFromFilePath(relativePath) {
  const absolutePath = path.posix.resolve(relativePath);
  const url = `file://${absolutePath}`;
  return url;
}
