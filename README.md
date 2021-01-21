# lp-design-system

![Test CI](https://github.com/chanzuckerberg/lp-design-system/workflows/Test%20CI/badge.svg)

This is the Learning Platform Design System or `@chanzuckerberg/czedi-kit` (working title).

## Development

### Node

Install the version of node specified in the `.nvmrc` file.

If using [nvm](https://github.com/nvm-sh/nvm), this can be done by running `nvm install`. If the correct version is already installed, `nvm use` will switch to it.

### Installation

```bash
npm install
npx lerna bootstrap
```

### Linting

```bash
npm run lint
```

or to fix any issues

```bash
npm run lint:fix
```

### Run Locally

```bash
npm start
```

### Build Packages

To build all packages you can run

```bash
npx lerna run build
```

### Adding a new package

This isn't something we'll be doing every day

```bash
npx lerna create '@chanzuckerberg/czedi-kit-<package-name>' \
  --access="restricted" \
  --license="UNLICENSED"
```

### Publishing

**We are only publishing alpha pre-releases at this time**

1. Confirm that all checks are green on CI.
2. Run `git checkout master`
3. Increment `<version>` based on the latest alpha version:

```bash
npx lerna version --no-push --conventional-commits --cd-version prerelease --message "chore(release): publish v0.0.1-alpha.<version>"
```

`--no-push` ensures the commit is not auto-pushed to remote git.

3. Run

```bash
npx lerna publish from-git --no-push
```

and confirm that tags/commit/changelog etc. look correct

4. Push commit and tags to remote:

```bash
git push origin --tags && git push origin master
```

In the future, we should have a `publish` script to handle all of this 🤓

You could also try directly running `lerna publish --canary --preid alpha`, though this gives a commit message that doesn't follow our lint rule for conventional commits.
