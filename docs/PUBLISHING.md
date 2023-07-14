## Versioning

EDS uses [SemVer](https://semver.org/) semantic versioning to keep track of ongoing changes to the product. The three types of versions are:

- **Major (X.y.z)** - Major versions contain breaking changes to Education developers' builds.
- **Minor (x.Y.z)** - Minor versions add new features or deprecate existing features without breaking changes.
- **Patch (x.y.Z)** - Patch versions fix defects or optimize existing features without breaking changes.

Look to [this helpful document](https://designsystem.morningstar.com/getting-started/versioning-and-breaking-changes/) from the Morning Star design system for detailed guidance on versioning.

We currently use [standard-version](https://github.com/conventional-changelog/standard-version) to increment the version number in `package.json`, create a git tag for the new release, and update `CHANGELOG.md` based on the commit log.

**NOTE**: `standard-version` is deprecated. Soon, we may move to an alternative script to handle releases.

---

## Releasing a new version of EDS

_Before the first time you publish_, make sure to:

- set up Two Factor Authentication for your npm account
- run `npm login` in your terminal to generate an access token for publishing
- are referring to the docs on `next` as there may have been updates to the release steps

### Publishing steps

We follow a [git-flow](https://nvie.com/posts/a-successful-git-branching-model/) based model, where:

- Development happens on `next`
- Release branches are cut from `next`. Only bugfixes and documentation updates can be added to release branches.
- Hotfix branches are cut from `main`. Only **urgent** bugfixes and documentation updates can be added to hotfix branches.
- Release and Hotfix branches are merged back into `main` and `next` after the publish is completed

#### Cutting a release branch

0. Before beginning, run `git fetch origin` to ensure you have the latest remote changes.
1. Confirm that all checks are green on CI.
2. Run `git checkout next && git pull origin next && yarn install` to update your local copy of `next`.
3. Determine the next version that will be released. An easy way to do this is with `yarn release --dry-run`
4. Run `git checkout -b release-v<version>`
5. Run `yarn release` if the recommended version is correct. If it isn't, use `yarn release:` followed by the proper version type (patch, minor, major)

#### Cutting a hotfix branch

0. Before beginning, run `git fetch origin` to ensure you have the latest remote changes.
1. Run `git checkout main && git pull origin main && yarn install` to update your local copy of `main`.
2. Run `git checkout -b hotfix-v<currentVersion>`
3. Create a new commit with the fix, merging into the above branch
4. Determine the next version that will be released. An easy way to do this is with `yarn release --dry-run`
5. Run `yarn release` if the recommended version is correct. If it isn't, use `yarn release:patch` (hotfix commits should not be minor or major)

**NOTE**: The package is not published, yet. If needed, you can [make additional changes to CHANGELOG.md now](#editing-the-changelog).

6. Push the branch up, including tags:

```
git push --follow-tags origin <branch> # this will also push tags
```

#### Merging a branch

7. Open a pull request for the branch, merging into **`main`**.

For the commit message, use the new version's content in the [CHANGELOG.md](../CHANGELOG.md) (e.g., all the changes for version 1.2.3). Review the content in the changelog to make sure the notes, and the from-version and to-version are correct. Note the link to the storybook on this PR CI/CD. You will add this link to the GitHub release notes later.

Merge the PR through a **merge commit**:

![github user interface showing a dropdown with the different merge options. the option "create a merge commit" is highlighted](https://user-images.githubusercontent.com/15840841/170514789-4f936ba2-c63d-486c-827a-b9e9e86b612e.png)

Once merged, wait until the [builds complete on `main`](https://github.com/chanzuckerberg/edu-design-system/actions) before continuing.

#### Publishing the package

8. Pull down the most up-to-date version of main: `git checkout main && git pull && yarn build`
9. Publish the package: `npm publish`
10. Create a [new release](https://github.com/chanzuckerberg/edu-design-system/releases) based on the new tag. Use the same text used for the pull request description above (from CHANGELOG.md). Also include the link for the built storybook in the description. This will automatically post to [relevant slack channels](https://slack.github.com/):
11. Lastly, run the following to "back merge" release changes to `next`:
    - `git checkout main && git pull origin main && git checkout next && git merge main && git push`

Once complete, you can update the package in the main apps that use it (for major versions):

- [edu-stack](https://github.com/chanzuckerberg/edu-stack) - in the package.json
- [edu-stack-service](https://github.com/chanzuckerberg/edu-stack-service) - in the package.json

Take note of the details here, which will also be mentioned in that month's newsletter, and updates to ZeroHeight (What's New).

#### Alpha release

For testing a release to build confidence.

1. Run `yarn release:alpha` to use `standard-version` to create appropriate tags and updates.
2. Run the last command output by `standard-version` as above. It will look something like:

```
git push --follow-tags origin <branch> && npm publish --tag alpha
```

3. Now, publish to the GitHub Registry

```
npm publish --tag alpha --registry=https://npm.pkg.github.com/
```

#### Editing the CHANGELOG

1. Run `git log` and note the version tag on the latest (release) commit
2. Make any edits you want to `CHANGELOG.md`
3. Run `git add . && git commit --amend` to update the release commit
4. Remove the tag from the old commit: `git tag -d v<version>`
5. Re-tag the release commit: `git tag v<version>`
