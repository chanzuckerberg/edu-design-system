# edu-design-system

![Test CI](https://github.com/chanzuckerberg/edu-design-system/workflows/Test%20CI/badge.svg)

This is the Learning Platform Design System or `@chanzuckerberg/czedi-kit` (working title).

## Development

### Node

Install the version of node specified in the `.node-version` file.

If using [nodenv](https://github.com/nodenv/nodenv) and [node-build](https://github.com/nodenv/node-build), this can be done by running `nodenv install`.

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

1. Confirm that all checks are green on CI.
2. Run `git checkout main`
3. Run `npm run create-releases` to bump the package versions, create new git tags, and create git commits. The packages are not published, yet.
4. Confirm that the git tags, git commits, and changelog updates look correct.
5. Run `npm run publish-releases` to publish the packages to the NPM registry.
6. Push commits and tags to the git remote with `git push origin main --follow-tags`

You could also try directly running `lerna publish --canary --preid alpha`, though this gives a commit message that doesn't follow our lint rule for conventional commits.
