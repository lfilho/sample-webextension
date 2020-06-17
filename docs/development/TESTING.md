# Testing

Check the npm scripts on [`package.json`](/package.json) for what gets actually called behind each command.

## The basics

- **Folder.** All tests are in the [`/__tests__/`](/__tests__/) folder.
- **Entrypoints.**
  - **`npm run test`** or **`npm test`**. The main one. Will run `npm run lint` and then the actual test suite using `jest`.
    - **`npm run test:watch`.** Will watch your files for changes and auto run `npm run test` when a file is changed.
  - **`npm run lint`.** Will lint your javascript files.
    - **`npm run lint:fix`.** Will lint your javascript files and auto-fix whatever it can. Automatically called before any commit. Details below.

Here's an example of how an execution looks like (as of `v1.6.0`):

![](/docs/images/test_run_example.png)

## Manual tests

By running `npm run develop`, behind the scenes it will:

1. Call `web-ext` which in its turn will open a browser for you with our latest extension code preloaded in it.
2. Will open out [sample test file](/__tests__/shared/test_page.html) which has two `iframes`: one loading an allowed URL, one loading a denied URL (simulating a tracker request!).
3. Watch for file changes and regenerate the extension and reload it on the browser.

Go nuts and click around to test the extension.

## The future of automated tests

As documented in [#38](https://github.com/lfilho/ddg-test-project/issues/38) and [INTERVIEW.md](/docs/INTERVIEW.md), it's unfortunately not possible to run automated (headless or not) ent-to-end tests.

In summary:

1. Since a recent change from Mozilla, we can't sideload extensions anymore (putting them in a specific folder and Firefox would load it up).
2. So we need `web-ext` to auto-load our last extension code in a browser for us.
3. So far so good. The problem is integrating other test tools with that browser in order to run automated tests in it:

   - `jest` uses `jsdom` by default, which merely reimplements some browser APIs in Javascript. It doesn't support extensions.
   - `puppeteer` or `playwright` can't connect to `web-ext`'s browser instance properly and test would always disconnect and throw errors.
   - For more details check the links above.

4. A possible path forward that I didn't have time to explore (see my odyssey in the links above) would be using in-browser tests (like `karma`). It's not ideal and would still require some manual checking ([`karma` is not designed for end-to-end tests](https://karma-runner.github.io/5.0/intro/faq.html) and wouldn't be able to report back to the command line the execution results). So we developers would still need to baby-sit the test run and it would not be possible to run such tests in a CI environment. Still not ideal but better than not having those tests at all.
