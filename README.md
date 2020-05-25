![Tests](https://github.com/lfilho/sample-webextension/workflows/Tests/badge.svg)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

## What are we solving?

This is a simple browser extension to identify and block trackers around the web. Inspired by DuckDuckGo's and Mozilla's efforts of making a safer and more private web :-)

## Installation and tests

1. Ensure you have node >=13.2.0 installed.
2. Clone or download this repo and then run `npm install` within it.
3. Then you can run `npm test` to execute the test suite. _More details in [TESTING.md](/docs/development/TESTING.md)_.

## Development details

Head over to [development docs](/docs/development/) folder for more details and rationale around:

- **[README.md](/docs/development/):** development environment, CI, tools and libraries being used for development. _Here be dragons._
- **[TESTING.md](/docs/development/TESTING.md):** testing examples, strategies and constraints.
- **[RELEASES.md](/docs/development/RELEASES.md):** how and when we release a new version of the extension.
- **[ARCHITECTURE.md](/docs/development/ARCHITECTURE.md):** an overview of our software architecture.

### See the extension in action

Run `npm run develop`. This will open a Firefox instance up with the extension preloaded for you and our [test page](/__tests__/shared/test_page.html) loaded. That page will tell you if the extension is working or not:
