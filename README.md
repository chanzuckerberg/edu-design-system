## lp-design-system

This is the Learning Platform Design System or `@chanzuckerberg/czedi-kit` (working title).

## Development

### Instalation

```bash
npm install
npx lerna bootstrap
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