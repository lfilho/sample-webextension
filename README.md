![Tests](https://github.com/lfilho/ddg-test-project/workflows/Tests/badge.svg)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

# DDG Tracker Blocker

Simple browser extension to identify and block trackers.

## A submission for DuckDuckGo as part of their hiring process 🐣➡️🦆

Interviewers and reviewers please see [INTERVIEW.md](/docs/INTERVIEW.md) for remarks and considerations with the interview process in mind.

## Quick installation and tests

Clone or download this repo and then run `npm install` within it. You will node >= 13 installed.

### See the extension in action

Run `npm run develop`. This will open a Firefox instance up with the extension preloaded for you and our [test page](/__tests__/shared/test_page.html) loaded. That page will tell you if the extension is working or not.

### Automated tests

Run `npm test` for linting + unit test combo.

For more details on installing a development environment and technical decisions around it, check our [development docs](/docs/development/).

## What are we solving?

Please see the original [design doc](/docs/design/) for the problem and proposed solution that this project implements.

## Development details

Head over to [development docs](/docs/development/) folder for more details and rationale around:

- **[docs/development/README.md](/docs/development/):** development environment, CI, tools and libraries being used for development. _Here be dragons._
- **[docs/development/TESTING.md](/docs/development/TESTING.md):** testing strategies, constraints and recommendations.
- **[docs/development/RELEASES.md](/docs/development/RELEASES.md):** how and when we release a new version of the extension.
- **[docs/development/ARCHITECTURE.md](/docs/development/ARCHITECTURE.md):** an overview of our software architecture.
