# Contributing to EDS

## First-time development setup

- After checking out the repository, remember to set up `husky` for the first time:

```sh
npx husky install
```

- Install the [CSS Var Complete - VS Code Plugin](https://marketplace.visualstudio.com/items?itemName=phoenisx.cssvar) which provides better Intellisense while writing CSS and referencing CSS variables.

### Requirements

```bash
# Setup your node environment using nodenv (https://github.com/nodenv/nodenv)
$ nodenv install
# Setup yarn using npm or homebrew (https://brew.sh)
$ brew install yarn # or npm install -g yarn
```

### Helpful commands

| Description                           | Command                 |
| ------------------------------------- | ----------------------- |
| Install dependencies                  | `yarn install`          |
| Run linter                            | `yarn lint`             |
| Run linter and fix all fixable issues | `yarn lint:fix`         |
| Build package                         | `yarn build`            |
| Run the component generator           | `yarn create-component` |

## Git Flow

This project uses [Git-flow](https://nvie.com/posts/a-successful-git-branching-model/) to manage the development workflow. Here's a breakdown of what this means for the design system:

- The `main` always represents the latest production-ready version of the design system. Each commit to `main` indicates a new release (either from changes on `release` or from `hotfix`).
- `next` represents the unpublished changes for the next release of the design system. These can be standalone commits, or merged in from `feature`.
- `feature` branches are for standalone/larger product features, and are created using the syntax `[FIRSTINITIAL][LASTNAME]/[FEATURE NAME|TICKET NUMBER]`.
- `release` branches are for preparing the next release of the design system from `next`. Only bug fixes and metadata changes should happen in release branches.
- `hotfix` branches are for urgent fixes that need to be production.

EDS follows the process outlined in [this article](https://nvie.com/posts/a-successful-git-branching-model/), which gets into the specifics.

## Contribution workflow

**Note**: For releasing urgent changes, read about how to publish hot fixes in [Publishing](./PUBLISHING.md).
**Note**: If you suspect your change will be breaking, flag the team ahead of time to discuss any conflicts with EDS release planning.

In order to contribute to EDS, please follow this workflow:

1. Create a feature branch from `next` called `[FIRSTINITIAL][LASTNAME]/[FEATURE NAME|TICKET NUMBER]` (e.g. `ahu/add-tertiary-button` OR `aholloway/EDS-1234`)
2. Do feature work in accordance to the library's [code guidelines](https://chanzuckerberg.github.io/edu-design-system/?path=/docs/documentation-contributor-guidelines-code-guidelines--docs). EDS uses [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/), so each commit should follow commit guidelines reflecting the nature of the work.
3. When work is ready for review, issue a pull request into `next` following the pull request guidelines. Tag `chanzuckerberg/edu-design-system` as reviewers for every PR.
4. The library owners and trusted contributors will review the work and suggest revisions or approve the pull request
5. Upon approval, feature gets **Squash and merged** into `next` to be slated for the next library release

### Contributing Breaking Changes

A few notes about breaking changes:

- If you anticipate a breaking changes is inbound, let the team know as soon as possible. This is to give everyone a chance to double-check the sequence of commits or create a `release` branch if needed.
- Not all breaking changes are equal! Changes removing deprecated components/APIs require careful communication. Changes affecting in-use components also require more scrutiny.
- Consider writing a codemod (using [TS Morph](https://ts-morph.com/)) for systematic changes. See examples in src/bin/migrate.
- There may be a way to make the change in a backwards-compatible way. Consider this during implementation, providing some rationale in cases where it is not feasible/practical to do so.

## Making Edits to Tokens

### Adding new tokens

When we need to introduce new tokens to account for customizations or features in new or existing components, for each new token, we use the following process:

1. Determine the tier of the new token with design
2. Work with design to make sure the token is added to figma with the proper naming format

For example, tokens in figma have a name in the format 'Category/token-name', so we'd want the resulting token in code to resolve to `--eds-theme-color-category-token-name`.

3. Once completed, add the token to the appropriate JSON file in src/design-tokens
4. Lastly, apply to the components according to what is in the design.

### Changing Existing Tokens

When making changes to existing tokens, we want to be mindful not to cause regressions for consumers. We use the following process for updating existing tokens:

1. Add in the new token to the corresponding JSON file in src/design-tokens
2. For the new token value, use a [style dictionary][sd] reference, pointing to the old token name (this will generate a css variable when processing CSS as a target).
3. Also add a comment which notes the old token is deprecated, and which token is the replacement to use.

For example, if we had a token `--eds-theme-color-background-old-name` which we want to change to `---eds-theme-color-background-new-name`, we would set the value of the new token to `var(--eds-theme-color-background-old-name)`. We can also add the following key to the JSON file.

[sd]: https://amzn.github.io/style-dictionary/#/version_3?id=output-references

```json
"comment": "@deprecated This should not be used in code or design. It will be removed in a future version of EDS. Please use eds-theme-color-new-name instead."
```

If there is a plan to simply remove a token due to some refactoring, you can remove the suffix suggesting the token to remove at your discretion.

This has the following benefits:

- Users who have added a theme value to `--eds-theme-color-background-old-name` will not have their theme value break upon update.
- Users can see which tokens are deprecated via the autogenerated comment in the token files.
- Users can adopt the new token when convenient, and EDS can publish new versions without introducing multiple breaking changes.

4. Finally, we replace all uses of the old token with the new token.
