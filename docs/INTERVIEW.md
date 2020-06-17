# Hello, is it me you're looking for?

I hope so!

Hello dear interviewers/reviewers. In this doc I describe a few decisions I took the liberty of making for the project only given the interview scenario. Some of them were mere experiments (like ESM modules) some of them were due to time constraints / shipping something usable for you.

## Disclaimer, early decisions and trade-offs

I have never developed a browser extension before, so there was a lot of unknowns for me. I refrained from reading DDG's extension source code as well similar extensions out there not to bias myself or to make you think I copied them 😇. In a more real world project I would have researched those more.

In order to de-risk my deliverables, I prioritized getting simplistic working versions out, so I could frontload my learnings on all things WebExtensions, `web-ext`, and how to test it. That meant **deliberately** not investing time in some areas that in a real-world scenario I **would have**. For example:

- **Only tested in Firefox.** Although Mozilla's best efforts with WebExtensions, it is not guaranteed it "just works" with the other browsers too, and I didn't want to enter the rabbit hole of testing each change in other browsers and debug problems in all of them.
- **No transpilation.** Since for this project I'd be testing only in a modern Firefox and Node, no need for transpilations. Definitely something needed for a real project.
- **Naive URL matching.** Right now our `List`s are simple `Set`s and the URL matching is done just by checking if a given URL is in the set. In the real world we should of course match against a pattern and not only full URLs.
- **Hardcoded values in the lists.** Right now we're using hardcoded values from `__url_fixtures.js` file to populate the allow/deny lists. Hardcoding it allowed me to move faster since I didn't have to (1) set up a local server to run my tests, (2) configure CSP and permissions on `manifest.json` files to allow me to do ajax calls to remote servers containing the authoritative lists.
- **No local server.** WebExtensions' API don't support intercepting requests for `file://` protocols, so for we need to test against `http(s)://` urls. For that, we ideally should have a local server running to make requests against it. But for this single-developer-and-only-a-few-requests-per-hour project I decided to just use the handy `https://itty.bitty.site` URLs to simplify and speed things up.
- **Known sub-par security on Github Action's automerge** See [#54](https://github.com/lfilho/ddg-test-project/issues/54) for more details and path forward.
- **ESM Modules.** The biggie. See more detailed write up below.

## Native ESM modules

> Post project comment: _I regret this decision._ More details in the "learning" section below.

I'm using modern versions of both Firefox and Node to develop this project. That allows us to use ESM modules all the way from Node to the browser so I wanted to see how far I could get with that.
For a real extension that would be used by the entire world, naturally, that wouldn't be possible. We would have to support older browsers.

Fortunately, it should be trivial to move the project to something like [Snowpack](https://www.snowpack.dev/) or good ol' Webpack.

Another reason we might not need a bundler: most projects need one to tree-shake, concatenate and minify files in order to speed up the webapp being downloaded to the browser. But in our case, it's an extension that will already be served with all its files zipped ([61.8kb as of v1.6.0](/releases/tag/v1.6.0), including images) and installed in one go so the entire code would already be available in the user's filesytem/memory. No need to worry about network calls for this.

## Learnings / Headaches / Surprises

After a load of reading, head scratching and debugging, here are a few learnings I had along the way:

- Automatic testing. Oh boy. My biggest frustration in this project and it was due my poor decision on using native ESM modules (more details in the next section). I really wanted to have delivered this to you. All I wanted was to use [Playwright](https://github.com/microsoft/playwright/) or [Puppeteer](https://github.com/puppeteer/puppeteer/) to test my extension in an automated fashion. I faced too many issues, which I have documented in [#38](https://github.com/lfilho/ddg-test-project/issues/38). This made having a [testing trophy](https://twitter.com/kentcdodds/status/960723172591992832) unfeasible for now. See the section "what I would do differently" below.
- While Firefox and most browsers support ESM modules, Firefox cannot load a `module.js` listed in `manifest.json` yet. For that we have to instead use a proxy html file with a `<script type="module" src="module.js"></script>` in it.
- `jsdom`, the default environment jest uses for tests, [don't support ESM modules yet](https://github.com/jsdom/jsdom/issues/2475). I lost a bit of time until I learned that and it prevented me to test, for example, the feedback form e2e. That made testing the html files like mentioned above impossible.
- The blocking functionality of `webRequest` only works on http(s) protocols. I started my tests trying to block a local `file:///` and was scratching my head for too long until I learned that. That would demand a local server to be setup but instead I decided to use `https://itty.bitty.site`.
- Although Firefox supports static class properties, `eslint` default parser doesn't yet. So tests would pass in node, the extension would work on the browser, but the linter would tell me there was something wrong. So I had to research a bit and learned that `babel-eslint` parser does support, hence I switched `eslint` parsers at some point in the project.
- `web-ext` uses an old version of `eslint` which [conflicts with the one in the actual project](https://github.com/mozilla/addons-linter/issues/3062#issuecomment-643825903). That meant I had to disable linting via web-ext tool. That meant our `manifest.json` no longer was going to get linted as part of `npm run lint`. I was ok with that decision especially considering the `manifest.json` get validated during `web-ext run`s.
- Firefox was missing documentation in some things. I spent time scavenging the web and it seems it's an overall feeling across the developers out there. As a silver lining, I created two small PRs for Mozilla: [this one](https://github.com/mozilla/extension-workshop/pull/649) and [this one](https://github.com/mozilla/web-ext/pull/1933) to fix their documentation. I also created a [feature request](https://github.com/mozilla/addons-linter/issues/3206).

## What I would do differently next time

Given the learnings above, I would revisit some of my decisions and do some things differently:

- I would use a transpiler and a non-ESM module loader since the start. While Firefox and Node had the modern features I wanted to use, I was naive in thinking that the testing libraries and development tools would also work out of the box with them. Silly mistake.
- Given all the troubles and learnings with `web-ext`, `puppeteer` and `jest` mentioned above, I would instead use a in-browser runner to do functional tests (like `karma`). That still has its own drawbacks, and I documented them a bit more in ["the future of automated tests" section](/docs/development/TESTING.md#the-future-of-automated-tests).

## Comments about scope and estimation

With the knowledge I gathered with this project, it's likely that my next similarly-scoped extension would take 1/3 or even 1/2 less time for me to develop.

I was able [to accomplish the deliverables I planned](https://github.com/lfilho/ddg-test-project/milestones?state=closed) I set out to do on the [design doc](/docs/design/). Although with the missing e2e tests as described above. If not for that bad decision on ESM modules / transpiling, I would likely have a bar raising test suite 😢.

When I gave my estimations on the design doc, I knew the actual code to block a request would be quite simple (after glimpsing the `webRequest` API documentation) but I also knew that I would most likely face the headaches described above since it would be my first time dealing with browser extensions, learning the APIs, web-ext, etc.

My trade-off decisions above were also key in reducing the amount of moving parts and keep me focused on what mattered most.

## Humble inclusiveness efforts

I wanted to highlight some minor but important efforts around inclusiveness: I purposefully chose `allow list` and `deny list` instead of their more usual but potentially offensive `whitelist` and `blacklist` counterparts. My next step would be renaming the `master` branch to something like `main` or `stable`.

## Parting thoughts

I had plenty of fun learning how to develop browser extensions and I'm happy to see Mozilla trying to standardize things with WebExtensions (although it seems they still need some love). I was glad I could contribute back to them, even if only a little bit.

If I were you, I'd hire me to keep the fun going 😇🤞.
