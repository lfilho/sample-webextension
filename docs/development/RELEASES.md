# Releases

Upon any change landing on `master` branch, the following steps will be executed, culminating in a release for us. Everything is orchestrated by [the release workflow](/.github/workflows/release.yml) and the `release` configuration section in [`package.json`](/package.json).

In a nutshell, here's what happens.

1. **`npm run release`**: That uses the semantic-release package to do the heavy lifting for us.
2. **`semantic-release`** will call a couple of plugins on its turn:
   1. **`commit-analyzer`**: will decide what makes a patch bump, a minor bump, or a major bump in our SemVer. It follows the `conventional commits` standard.
   2. **`release-notes-generator`**: does what it says. You can check any releases on Github to see the final output.
   3. **`exec`**: custom script executor. In our case, will call `web-ext` to build the extension and generate the .zip for us.
   4. **`npm`**: will update the package.json version (and publish it to npm registry, if we wanted).
   5. **`github`**: will tag and create a "release" according to github standards, including the .zip file above linked in it as a release asset.

## Semantic Releases and conventional commits

We follow [SemVer](https://semver.org/). Automatically. 🤯. How?

1. Upon any push to `master`, the `semantic-release` tool (run by the workflow above), will traverse all commits since last release and decide on a new semver version for our app. How?
2. By parsing each commit message against [conventional commits](https://conventionalcommits.org/) and decide what makes a patch, minor or major version bump.

That means that we have to be diligent about our commit messages and follow the conventional commits standard above. It will actually get enforced during PR time: we run the [`conventional_commits_checker.yml`]('/.github/workflows/conventional_commits_checker.yml') workflow to check our commits for us.
