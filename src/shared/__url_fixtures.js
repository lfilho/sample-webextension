const A_URL = 'https://example.com';
const GOOD_URL = 'https://luiz.dev';
const BAD_URL = 'https://evil-tracker.com';
const ANOTHER_URL = GOOD_URL;
const SOME_URLS = [A_URL, ANOTHER_URL, BAD_URL];
const TEST_PAGE_GOOD_URL =
  'https://itty.bitty.site/#good_page/data:text/html;charset=utf-8;bxze64,XQAAAALrAQAAAAAAAAAeGInmWR9D5qtrM4PFJv4W1okR98bzFbE2QlIiIqEKRNhWozLGaVxy2UBVi6vb5PjLiS+KmhnoBI2zbVEi38FFqGt0V2dZ/n48NtEOjSTkOFXBuNLAKC6rlcwmvnHnUnMAWA2l/QImsEbNvvf1bv40vbtBzNp9F3TGp/HpcdlmwUSp59tjbjdUlRkOVnMxBaTPI6tnqjg9UBREwBH6Y4c6xLg53hJodPJyK8AysLdOEqC5OPFdGrHq7n6ViwKq90juHDM+UhFD8ug4iSu0Yo74yBMAo7Rtj+Jd5h9AkkjDCs/m4RMIP7KQKT4AldOuVvxaNDd4LcfbH/7lFxzMpv2FPyYxeR5ZmDMwE6422v7jh2OnV4nTcu42kWkhVBP7U06PxG1bBjmd5+5p11z/jK399tAktg==';
const TEST_PAGE_BAD_URL =
  'https://itty.bitty.site/#bad_page/data:text/html;charset=utf-8;bxze64,XQAAAAI1AgAAAAAAAAAeGInmWR9D5qtrM4PFJv4W1okR98bzFbE2QlIWuIKxrmOKcpOUCz+bgN13tm1YwI65ckLaaMk97I0eK4ZJmz5rEyi5AYIrCihWPyWsU8imdwCjsAu9mVY4Uz3NDJSwS2tBy4fpBWIzlJM+PEIF1Dz7uHdB5dd0JkIYoHoNI51/xPcOHjaLtkdq929hapYOYARvUkxhKCAYZqoeWl/azB+/iRrItZhXoN2Xhb7cEouQ4ySG85i7cH0nZAJxZezxYYPzjYOKj1QECrYU2ufsndUGql9zsUXyBzVv3UCYzraVIpXLzEWabESPgYK1HY3biPhAiXzCU1i3msUdqKm0jl/HwqnVgJjhKaCsQvuv8pyy+VVkaz/XPVibLpmrbELCVUdG/jgKW2ig1pqjIAIoFb7YROo5+5026HlBBKlBJSJtJPiB5wAAbZMivZGwt72qmdA5R4jjQVr+djo2';
const BAD_URLS = [BAD_URL, TEST_PAGE_BAD_URL, 'https://facebook.com'];
const GOOD_URLS = [GOOD_URL, TEST_PAGE_GOOD_URL, 'https://eff.org'];

export {
  A_URL,
  GOOD_URL,
  BAD_URL,
  ANOTHER_URL,
  SOME_URLS,
  TEST_PAGE_BAD_URL,
  TEST_PAGE_GOOD_URL,
  BAD_URLS,
  GOOD_URLS,
};
