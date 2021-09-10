# edu-design-system

![Test CI](https://github.com/chanzuckerberg/edu-design-system/workflows/Test%20CI/badge.svg)

The [Education Initiative](https://chanzuckerberg.com/education/)'s design system packages.

## Development

### Requirements

- Node - if using [nodenv](https://github.com/nodenv/nodenv), you can install the right version with `nodenv install`
- Yarn - install through either [npm](https://docs.npmjs.com/) (`npm install -g yarn`) or [homebrew](https://brew.sh/) (`brew install yarn`)

### Helpful commands

| Description                           | Command                 |
| ------------------------------------- | ----------------------- |
| Install dependencies                  | `yarn install`          |
| Run linter                            | `yarn lint`             |
| Run linter and fix all fixable issues | `yarn lint:fix`         |
| Build packages                        | `yarn build`            |
| Run the component generator           | `yarn create-component` |

### Publishing

1. Confirm that all checks are green on CI.
2. Run `git checkout main`
3. Run `yarn create-releases` to bump the package versions, create new git tags, and create git commits. The packages are not published, yet.
4. Confirm that the git tags, git commits, and changelog updates look correct.
5. Run `yarn publish-releases` to publish the packages to the NPM registry.
6. Push commits and tags to the git remote with `git push origin --tags && git push origin main`


**Before the first time you publish**, make sure to:
- set up Two Factor Authentication for your npm account
- run `npm login` in your terminal to generate an access token for publishing

## Project Status

This project is under **active development**. If you would like to contribute, check out the [contribution guidelines](https://github.com/chanzuckerberg/edu-design-system/blob/main/CONTRIBUTING.md) or [open an issue](https://github.com/chanzuckerberg/edu-design-system/issues).

This project is governed under the [Contributor Covenant](https://www.contributor-covenant.org/) code of conduct.

## Reporting Security Issues

See our [Security Readme](https://github.com/chanzuckerberg/edu-design-system/blob/main/SECURITY.md).
