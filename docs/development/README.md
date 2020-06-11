# Development

_All your base are belong to us_

Here are some decisions we have done for our development, feel free to suggest better ones.

---

## Intallation

No mistery: `npm i`.

## Test

The main entry point is `npm test`.
That will run linting and then the actual test suit for you.
Check the npm scripts on package.json for what gets actually called behind that command.

## Linting and formatting

_See #35 for the initial work on this._

1. We use [lint-staged](https://npm.im/lint-staged) and [husky](https://npm.im/husky) to automatically run tests before commits. Check the `husky` and `lint-staged` sections in `packaging.json` for more details on what it does.
2. We use [prettier](https://npm.im/prettier) to auto style our code so you don't have to worry about it. ✨
3. We use [eslint](https://npm.im/eslint) to lint (and fix, when possible) our code for common errors. It is configured to also report and fix `prettier` errors, making `eslint` our single entry point for static analysis.
4. We recommend also running auto-linting and formatting upon file save with your editor, so your staging and committing flow is faster and with less surprises.
5. Both `eslint` and `prettier` configurations are defined in `package.json`.

## ESM modules - No bundlers

For the purposes of this project/interview, I'll be using a modern version of Node and Firefox to develop and test the changes.
That allows us to use ESM modules all the way from Node to the browser.
If needed/time permitting, we can always add Snowpack or Webpack later have the usual transpilation done, but I wanted to save that time configuring all that boilerplate and slowing development down.

Another reason not to demand a bundler upfront is that since this project is an extension, not a webapp. So it's likely it won't get huge like most webapps nowadays, and will be download just once when installing the extension (and the occasional update). Hence we don't need to rush towards minification, bundling, tree-shaking, etc.

## No babel

In addition to the rationale above about ESM modules, I anticipate the javascript in this project will be mainly vanilla javascript, not complex enough to need much else transpilation -- the only real external dependency is the WebExtension API which is already implemented in most major browsers for more than 2 years (and it's something that Babel wouldn't be able to "transpile" anyway).

## CI

We're using Github Actions os our CI envirorment. Check the [.github folder](../../.github/workflows/) for what we are using. In sum:

- `npm test` on each PR.
- `npm release` on each push to master, auto-generating a release, release notes, version bumps, etc. _See #36 for the initial work on it._

## Git flow

We're using feature branches and PRs to merge them to master.
A branch can have as many commits as you like but PRs will be squashed into a single commit. So make your branches/PRs small and cohesive. This enables a more streamlined master's history, easier to rollback if needed, easier and faster to rebase, etc.
