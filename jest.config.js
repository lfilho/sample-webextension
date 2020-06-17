const basicConfig = {
  testEnvironment: 'jest-environment-node', // Needed for jest's experimental ESM support
  transform: {}, // Needed for jest's experimental ESM support
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
};

const background = {
  ...basicConfig,
  displayName: 'background',
  testRegex: 'src/background/.*\\.spec\\.js$',
};

const browserAction = {
  ...basicConfig,
  displayName: 'browser_action',
  testRegex: 'src/browser_action/.*\\.spec\\.js$',
};

const shared = {
  ...basicConfig,
  displayName: 'shared',
  testRegex: 'src/shared/.*\\.spec\\.js$',
};

export default {
  projects: [background, browserAction, shared],
};
