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

```
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
  --registry="https://npm.pkg.github.com/" \
  --access="restricted" \
  --license="UNLICENSED"
```

### Publishing

We're not ready to publish yet
