import path from 'path';

const HTML_PAGES_PATH = `${process.cwd()}/__tests__/shared/`;
const TEST_PAGE_PATH = `${HTML_PAGES_PATH}/test_page.html`;

export const A_URL = 'https://example.com';
export const GOOD_URL = 'https://duckduckgo.com';
export const BAD_URL = 'https://evil-tracker.com';
export const ANOTHER_URL = GOOD_URL;
export const SOME_URLS = [A_URL, ANOTHER_URL, BAD_URL];
export const BAD_URLS = [BAD_URL, 'https://facebook.com'];
export const GOOD_URLS = [GOOD_URL, 'https://eff.org'];
export const LOCAL_TEST_PAGE_URL = getUrlFromFilePath(TEST_PAGE_PATH);

function getUrlFromFilePath(relativePath) {
  const absolutePath = path.posix.resolve(relativePath);
  const url = `file://${absolutePath}`;
  return url;
}
