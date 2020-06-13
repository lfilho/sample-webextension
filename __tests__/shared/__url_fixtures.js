import path from 'path';

const HTML_PAGES_PATH = `${process.cwd()}/__tests__/shared/`;
const TEST_PAGE_PATH = `${HTML_PAGES_PATH}/test_page.html`;
const GOOD_PAGE_PATH = `${HTML_PAGES_PATH}/good_page.html`;
const BAD_PAGE_PATH = `${HTML_PAGES_PATH}/bad_page.html`;

export const A_URL = 'https://example.com';
export const GOOD_URL = 'https://duckduckgo.com';
export const BAD_URL = 'https://evil-tracker.com';
export const ANOTHER_URL = GOOD_URL;
export const SOME_URLS = [A_URL, ANOTHER_URL, BAD_URL];
export const LOCAL_TEST_PAGE_URL = getUrlFromFilePath(TEST_PAGE_PATH);
export const LOCAL_GOOD_PAGE_URL = getUrlFromFilePath(GOOD_PAGE_PATH);
export const LOCAL_BAD_PAGE_URL = getUrlFromFilePath(BAD_PAGE_PATH);
export const BAD_URLS = [BAD_URL, LOCAL_BAD_PAGE_URL, 'https://facebook.com'];
export const GOOD_URLS = [GOOD_URL, LOCAL_GOOD_PAGE_URL, 'https://eff.org'];

function getUrlFromFilePath(relativePath) {
  const absolutePath = path.posix.resolve(relativePath);
  const url = `file://${absolutePath}`;
  return url;
}
