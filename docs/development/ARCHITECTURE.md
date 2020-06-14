# ARCHITECTURE

## WebExtension

// TODO

## Error Handling

_See [issue 46](https://github.com/lfilho/ddg-test-project/issues/46) for more details on the reasoning for our Error handling._

All errors in our codebase should extend `DDGError` class. This give us a few benefits:

1. **Error codes.** Each subclass' `this.name` will automatically serve as our unique error code.
1. **No duplicate errors.** That prevents things like `new Error('Invalid URL')` in `file1.js` and `new Error('This URL is invalid')` in `file2.js`.
1. **Better tests.** The above point make tests more robust by not having to rely on string matching for thrown errors.
1. **Better DX experience at scale.** The effort for creating a new Error type is minimal (a couple of lines). And after we have the error types we need, it's easier to reuse, debug, test and refactor since we don't depend on strings anymore.
1. **Human friendly.** This strategy forces us to think about `this.message` and make it developer/user friendly. It also allows us to easily translate our error messages if we want to. See the `DDGError` class for a simple example.
1. **Reusable error messages**. Since the messages are weel thought and translateable, we can easily surface them all the way to the UI if needed. That avoids having to have a separate map in the UI for "human friendly" messages.
1. **Better logging.** Since we have unique codes and a standard to follow now, we can make our Logger formate/print our errors to our liking.

**Note**: To ensure we will continue to have those benefits, keep an eye out during PR reviewing time for colleagues mistakenly using `new Error()` or similar instead one of our errors. If we want to get fancy we could even consider writing an eslint plugin for that 🤓.
