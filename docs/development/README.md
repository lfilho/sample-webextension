# Development

_All your base are belong to us!_

Here are some decisions we have done for our development, feel free to suggest better ones.

This document only highlights things necessary for contributing to this this codebase.
For details on our architecture, see [ARCHITECTURE.md](./ARCHITECTURE.md) instead.

---

## Extension live reload and debugging

Use `npm run develop` or `npm start` to run `web-ext run` behind the scenes. `web-ext` in an official tool from Mozilla that will:

- Spin up a _new_ browser instance.
- Watch for file changes and automatically reload them in the browser.

Learn how you can debug the extension on the browser on [Mozilla's Extension Workshop website](https://extensionworkshop.com/documentation/develop/debugging/).

## Testing

See [TESTING.md](/docs/development/TESTING.md).

## Linting and formatting

- We use **[lint-staged](https://npm.im/lint-staged)** and **[husky](https://npm.im/husky)** to automatically run tests before commits. Check their sections in [`package.json`](/package.json) for more details on what they do.
- We use **[prettier](https://npm.im/prettier)** to auto style our code so you don't have to worry about it. ✨
  - **`npm run format`.** Will auto format your js, json, css and markdown files using `prettier`. This command is called by lint-staged before any commit attempt.
- We use **[eslint](https://npm.im/eslint)** to lint (and fix, when possible) our code for common errors. It is configured to also report and fix `prettier` errors, making `eslint` our single entry point for static analysis.
  - **`npm run lint:fix`.** Will lint your javascript files and auto-fix whatever it can. This command is called by lint-staged before any commit attempt.

## Recommended dev setup

For your daily development, we recommend:

- Having one terminal window running `npm run develop`
- Having one terminal window running `npm run test:watch`
- Running linting and formatting automatically upon file save with your editor/IDE, so your testing and committing flows are faster and with less surprises.

## CI

We're using Github Actions as our CI envirorment. Check the [workflows folder](/.github/workflows/) for what we are using. In sum, it:

- Runs `npm run test` on each PR.
- Runs `npm run release` on each push to `master`, auto-generating a release, release notes, version bumps, etc. See the [RELEASES.md](/docs/development/RELEASES.md) for more details on how releases are done.
- Create a new PR with the updated files and automerge it
