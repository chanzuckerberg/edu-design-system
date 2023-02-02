# Contributing to EDS

## Git Flow

This project uses [Git-flow](https://nvie.com/posts/a-successful-git-branching-model/) to manage the development workflow. Here's a breakdown of what this means for the design system:

- The `main` always represents the latest production-ready version of the design system. Each commit to `main` indicates a new release (either from changes on `release` or from `hotfix`).
- `next` represents the unpublished changes for the next release of the design system. These can be standalone commits, or merged in from `feature`.
- `feature` branches are for standalone/larger product features, and are created using the syntax `[FIRSTINITIAL][LASTNAME]/[FEATURE NAME]`.
- `release` branches are for preparing the next release of the design system from `next`. Only bug fixes and metadata changes should happen in release branches.
- `hotfix` branches are for urgent fixes that need to be production.

EDS follows the process outlined in [this article](https://nvie.com/posts/a-successful-git-branching-model/), which gets into the specifics.

## Contribution workflow

**Note**: For urgent hotfixes, use `main` instead of `next` as the base of your changes.

In order to contribute to EDS, please follow this workflow:

1. Create a feature branch from `next` called `[FIRSTINITIAL][LASTNAME]/[FEATURE NAME]` (e.g. `ahu/add-tertiary-button`)
2. Do feature work in accordance to the library's [code guidelines](./CODE_GUIDELINES.md). EDS uses [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/), so each commit should follow commit guidelines reflecting the nature of the work.
3. When work is ready for review, issue a pull request into `next` following the pull request guidelines. Tag `chanzuckerberg/edu-design-system` as reviewers for every PR.
4. The library owners and trusted contributors will review the work and suggest revisions or approve the pull request
5. Upon approval, feature gets **Squash and merged** into `next` to be slated for the next library release
