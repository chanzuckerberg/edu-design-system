# Contributing to EDS

## Git Flow

This project uses [Git-flow](https://nvie.com/posts/a-successful-git-branching-model/) to manage the development workflow. Here's a breakdown of what this means for the design system:

- The `main` always represents the latest production-ready version of the design system. Every commit to `main` indicates a new release.
- The `develop` branch is where ongoing development happens.
- `feature` branches are for standalone/larger product features, and are created using the syntax `feature/[feature-name]`.
- `release` branches are for preparing the next release of the design system. Only bug fixes and metadata changes should happen in release branches.
- `hotfix` branches are for fixes that need to be production.

We follow the process outlined in [this article](https://nvie.com/posts/a-successful-git-branching-model/), which gets into the specifics.

## Contribution workflow

Contributors to the EDS library must follow this workflow:

1. Create a feature branch from `develop` called `feature/[FEATURE NAME]`. TODO: likely tie feature name to tickets pending discussion
2. Do feature work in accordance to the library's [code guidelines](./CODE_GUIDELINES.md)
3. Update the CHANGELOG to document the work
4. When work is ready for review, issue a pull request into the `develop` branch following the pull request guidelines
5. The library owners and/or trusted contributors will review the work and suggest revisions or approve the pull request
6. Upon approval, feature gets merged into `develop` to be slated for the next library release
