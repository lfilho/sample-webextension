# ARCHITECTURE

## Code structure

Our `src` is where the extension code lives and it follows the [Anatomy of a WebExtension](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension).
Familiarize yourself with the documentation at https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions and https://extensionworkshop.com/ to build this WebExtension with us 🙂.

Main files & folders:

```
__tests__/                  → Tests written with jest framework
docs/                       → You know it 😉
src/
├── background/             → Extension's long-running logic. Where the magic happens. ✨
│   ├── index.html          → Unfortunately needed to load index.js as a module
│   ├── index.js            → Entrypoint. Loads request_blocker.js and start monitoring requests
│   ├── list_populator.js→  → Populates the list from our bundled values, fetches from remote sources, etc
│   ├── model/              → Our modeled entities
│   ├── request_blocker.js  → Here's where we block those trackers! 💪
│   ├── request_listener.js → Listens to the urls being requested and tell request_blocker.js whether to block the request or not
│   └── request_matcher.js  → Checks urls against deny/allow list and tell request_listener.js if that url should be blocked or not
├── browser_action/         → The popup when we click the extension's icon in the toolbar.
│   ├── feedback_sender.js  → Logic for sending the feedback
├── images/                 → Icons and images to be used by browser and ourselves (e.g.: inside our popup page)
├── manifest.json           → WebExtension's standard entrypoint for it all
└── shared/                 → Modules and helpers to be shared across background, browser_action, etc.
```

Please follow that convention if we ever need, for example, [Content Scripts](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Content_scripts) or an [Options Page](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages).

## Error Handling

_See [#46](https://github.com/lfilho/sample-webextension/issues/46) for more details on the reasoning for our Error handling._

All errors in our codebase should extend `MyProjectError` class. This give us a few benefits:

1. **Error codes.** Each subclass' `this.name` will automatically serve as our unique error code.
2. **No duplicate errors.** That prevents things like `new Error('Invalid URL')` in `file1.js` and `new Error('This URL is invalid')` in `file2.js`.
3. **Better tests.** The above point make tests more robust by not having to rely on string matching for thrown errors.
4. **Better DX experience at scale.** The effort for creating a new Error type is minimal (a couple of lines). And after we have the error types we need, it's easier to reuse, debug, test and refactor since we don't depend on strings anymore.
5. **Human friendly.** This strategy forces us to think about `this.message` and make it developer/user friendly. It also allows us to easily translate our error messages if we want to. See the `MyProjectError` class for a simple example.
6. **Reusable error messages**. Since the messages are well thought and translatable, we can easily surface them all the way to the UI if needed.
7. **Better logging.** Since we have unique codes and a standard to follow now, we can make our Logger formate/print our errors to our liking.

**Note**: To ensure we will continue to have those benefits, keep an eye out during PR reviewing time for colleagues mistakenly using `new Error()` or similar instead one of our errors. If we want to get fancy we could even consider writing an eslint plugin for that 🤓.
