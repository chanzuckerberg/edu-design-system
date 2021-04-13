# edu-design-system

![Test CI](https://github.com/chanzuckerberg/edu-design-system/workflows/Test%20CI/badge.svg)

This is the Learning Platform Design System or `@chanzuckerberg/czedi-kit` (working title).

## Development

### Node

Install the version of node specified in the `.node-version` file.

If using [nodenv](https://github.com/nodenv/nodenv) and [node-build](https://github.com/nodenv/node-build), this can be done by running `nodenv install`.

### CSS Modules

We use `typescript-plugin-css-modules` to provide intellisense on css modules within the `.tsx` files. To enable this, follow the instructions in the [VSCode docs](https://code.visualstudio.com/docs/typescript/typescript-compiling#_using-the-workspace-version-of-typescript).

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

### Add a new component
From the directory root, run
```bash
plop
```
and enter the component name.

If you get an error message with `command not found: plop`, try
```bash
npx plop
```
and enter the component name.

This will generated a few files for your new component to help you get started.

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
2. Run `git checkout main`
3. Increment `<version>` based on the latest alpha version:

```bash
npx lerna version --no-push --conventional-commits prerelease --message "chore(release): publish v0.0.1-alpha.<version>"
```

`--no-push` ensures the commit is not auto-pushed to remote git

`--conventional-commits` automatically updates the CHANGELOGs based on the commit log

4. Run

```bash
npx lerna publish from-git --no-push
```

and confirm that tags/commit/changelog etc. look correct

5. Push commit and tags to remote:

```bash
git push origin --tags && git push origin main
```

In the future, we should have a `publish` script to handle all of this 🤓

You could also try directly running `lerna publish --canary --preid alpha`, though this gives a commit message that doesn't follow our lint rule for conventional commits.
