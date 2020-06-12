# Releases

Upon any change landing on `master` branch, the following steps will be executed, culminating in a release for us. Everything is orchestrated by [this github action](../../.github/workflows/release.yml) and the `release` configuration section in `package.json`.

In a nutshell, here's what happens.

1. **`npm run release`**: That uses the semantic-release package to do the heavy lifting for us.
2. **`semantic-release`** will call a couple of plugins on its turn:
   2.1. **`commit-analyzer`**: will decide what makes a patch bump, a minor bump, or a major bump in our SemVer. It follows the `conventional commits` standard.
   2.2. **`release-notes-generator`**: does what it says. You can check any releases on Github to see the final output.
   2.3. **`exec`**: custom script executor. In our case, will call `web-ext` to build the extension and generate the .zip for us.
   2.4. **`npm`**: will update the package.json version (and publish it to npm registry, if we wanted).
   2.5. **`github`**: will tag and create a "release" according to github standards, including the .zip file above linked in it as a release asset.
