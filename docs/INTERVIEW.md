# Hello, is it me you're looking for?

I hope so!

Hello dear interviewers/reviewers. In this doc I describe a few decisions I took the liberty of making for the project only given the interview scenario.

## Disclaimer, context and trade-offs

I have never developed a browser extension before, so there was a lot of unknowns for me. I refrained from reading DDG's official extension source code not to bias myself or to make you think I copied it 😇.

In order to de-risk my deliverables, I prioritized getting simplistic working versions out, so I could frontload my learnings on all things WebExtensions, `web-ext`, and how to test it. That meant **deliberately** not investing time in some areas that in a real-world scenario I **would have**. For example:

- **Firefox testing only.** Although Mozilla's best efforts with WebExtensions, it is not guaranteed it "just works" with the other browsers too, and I didn't want to enter the rabbit hole of testing each change in other browsers and debug problems in all of them.
- **Naive URL matching.** Right now our `List`s are simple `Set`s and the URL matching is done just by checking if a given URL is in the set. In the real world we should of course match against a pattern.
- **Hardcoded lists.** Right now we're using hardcoded values from `__url_fixtures.js` file (which is fine for testing), but ideally we would have a mechanism to (1) fetch a fresh deny list from the internet and bundle it with each release of our extension and/or (2) a mechanism to update the lists on-the-fly, while the extension is already running. Hardcoding it for now allowed me to move faster since I didn't have to (1) set up a local server to run my tests, (2) configure CSP and permissions on `manifest.json` files to allow me to do ajax calls.
- **No local server.** For testing that a `http(s)://` request is actually getting blocked, we ideally should have a local server running and make requests against that. Especially for testing the allow/deny logic (i.e.: requests that will go out to the network) we should not be spamming the external websites with our tests :-). But for this single-developer-and-only-a-few-requests-per-hour project I decided to just use handy `https://itty.bitty.site` URLs to speed things up.
- **Sub-par security on Github Action's automerge** See [#54](https://github.com/lfilho/ddg-test-project/issues/54) for more details.
- **ESM Modules.** See more detailed write up below.

## Native ESM modules

I'm using modern versions of both Firefox and Node to develop this project. That allows us to use ESM modules all the way from Node to the browser so I wanted to see how far I could get with that.
For real extension to be used by entire world, naturally, that wouldn't be possible. We would have to support older browsers.

Fortunately, it should be trivial to move the project to something like [Snowpack](https://www.snowpack.dev/) or good ol' Webpack.

Another reason we might not need a bundler: most projects need one to tree-shake, concatenate and minify files in order to speed up the webapp being downloaded to the browser. But in our case, it's an extension that will already be served zipped (63kb as of > v1.5.1) and installed in one go so the entire code would already be available in the user's filesytem/memory. No need to worry about network calls for this.

## No transpilation

Same reasoning from above applies here: not something needed only for this interview project, but surely we would like to transpile the code for production use.

## Learnings / Headaches / Surprises

After a load of reading, head scratching and debugging, here are a few learnings I had along the way:

- Automatic testing. Oh boy. My biggest frustration in this project. I really wanted to have delivered this to you. All I wanted was to use [Playwright](https://github.com/microsoft/playwright/) or [Puppeteer](https://github.com/puppeteer/puppeteer/) to test my extension in an automated fashion. I faced too many issues, which I have documented in [#38](https://github.com/lfilho/ddg-test-project/issues/38). This made having a [testing trophy](https://twitter.com/kentcdodds/status/960723172591992832) unfeasible for now. See the section "what I would do differently" below.
- While Firefox and most browsers support ESM modules, Firefox cannot load a `module.js` listed in `manifest.json`. For that you have to instead use a proxy html file with a `<script type="module" src="module.js"></script>` in it.
- The blocking functionality of `webRequest` only works on http(s) protocols. I started my tests trying to block a local `file:///` and was scratching my head for too long until I learned that. That would demand a local server to be setup but instead I decided to use `https://itty.bitty.site`.
- `jsdom`, the default environment jest uses for tests, [don't support ESM modules yet](https://github.com/jsdom/jsdom/issues/2475). I lost a bit of time until I learned that and it prevented me to test, for example, the feedback form e2e.
- Although Firefox supports static class properties, `eslint` default parser doesn't yet. So tests would pass in node, everything would work on the browser, but the linter is telling you otherwise haha. So I had to research a bit and learned that `babel-eslint` parser does, hence I switched `eslint`'s parser to it at some point in the project.
- Web-ext uses an old version of `eslint` which conflicts with the one in the actual project: https://github.com/mozilla/addons-linter/issues/3062#issuecomment-643825903. That meant I had to disable linting via web-ext tool. That meant our `manifest.json` no longer was going to get linted. I was ok with that decision since the manifest.json was pretty stable at that point and wasn't going to suffer more changes in the near term.
- Firefox was missing documentation in some things. I spent time scavenging the web and it seems it's an overall feeling across the developers out there. As a silver lining, I created two small PRs for Mozilla: [this one](https://github.com/mozilla/extension-workshop/pull/649) and [this one](https://github.com/mozilla/web-ext/pull/1933) to fix their documentation. I also created a [feature request](https://github.com/mozilla/addons-linter/issues/3206).

## What I would do differently next time

Given the learnings above, even for a simple project like this, I would revisit some of my decisions and do some things differently:

- Given all the troubles and learnings with `web-ext`, `puppeteer` and `jest` mentioned above, I would instead use a in-browser runner to do functional tests (like `karma`). While that would still no enable us to run such tests in a CI environment, it would at least enable us have automated tests and not have to rely on manual ones.
- I would give in use a transpiler. While Firefox has a great support for the modern features I wanted to use, I was naive in thinking that the testing libraries and development tools would also work out of the box.

## Comments about scope and estimation

With the knowledge I gathered with this project, it's likely that my next similarly-scoped extension would take 1/3 or even 1/2 less time for me to develop.

When I gave my estimations on the design doc, I knew the actual code to block a request would be quite simple (after glimpsing the `webRequest` API documentation) but I also knew that I would most likely face the headaches described above since it would be my first time dealing with browser extensions.

My trade-off decisions above were also key in reducing the amount of moving parts and keep me focused on what mattered most.

## Humble inclusiveness efforts

I wanted to highlight some minor but important efforts around inclusiveness: I purposefully chose `allow list` and `deny list` instead of their more usual but potentially offensive `whitelist` and `blacklist` counterparts. My next step would be renaming the `master` branch to something like `main` or `stable`.

## Parting thoughts

I had plenty of fun learning how to develop extensions and I'm happy to see Mozilla trying to standardize things with WebExtensions.

If I were you I'd here me to keep the fun going 😇🤞.
