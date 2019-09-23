## lp-design-system

The initial repo for the Learning Platform Design System.

## Adding a new package

```bash
npx lerna create '@chanzuckerberg/czedi-kit-<package-name>' \
  --registry=https://npm.pkg.github.com/ \
  --keywords="design system" \
  --description="<description>"
```