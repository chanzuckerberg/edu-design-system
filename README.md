# edu-design-system

![Test CI](https://github.com/chanzuckerberg/edu-design-system/workflows/Test%20CI/badge.svg)

The [Education Initiative](https://chanzuckerberg.com/education/)'s design system packages.

## Development

### Requirements

- Node - if using [nodenv](https://github.com/nodenv/nodenv), you can install the right version with `nodenv install`
- NPM - comes with Node

### Helpful commands

| Description                           | Command                              |
| ------------------------------------- | ------------------------------------ |
| Install dependencies                  | `npm install && npx lerna bootstrap` |
| Run linter                            | `npm run lint`                       |
| Run linter and fix all fixable issues | `npm run lint:fix`                   |
| Build packages                        | `npm run build`                      |
| Run the component generator           | `npx plop`                           |

### Publishing

1. Confirm that all checks are green on CI.
2. Run `git checkout main`
3. Run `npm run create-releases` to bump the package versions, create new git tags, and create git commits. The packages are not published, yet.
4. Confirm that the git tags, git commits, and changelog updates look correct.
5. Run `npm run publish-releases` to publish the packages to the NPM registry.
6. Push commits and tags to the git remote with `git push origin main --follow-tags`

## Project Status

This project is under **active development**. This project is governed under the [Contributor Covenant](https://www.contributor-covenant.org/) code of conduct.

## Reporting Security Issues

See our [Security Readme](https://github.com/chanzuckerberg/edu-design-system/blob/main/SECURITY.md).
