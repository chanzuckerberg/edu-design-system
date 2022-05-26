## Versioning

EDS uses [SemVer](https://semver.org/) semantic versioning to keep track of ongoing changes to the product. The three types of versions are:

- **Major (X.y.z)** - Major versions contain breaking changes to Education developers' builds.
- **Minor (x.Y.z)** - Minor versions add new features or deprecate existing features without breaking changes.
- **Patch (x.y.Z)** - Patch versions fix defects or optimize existing features without breaking changes.

Look to [this helpful document](http://designsystem.morningstar.com/about/versioning.html) from the Morning Star design system for detailed guidance on versioning.

**Note**: We are currently using a _modified_ form of semver where:

- Breaking changes update the _minor_ version
- All other changes (new features, fixes, etc.) update the _patch_ version

Once we publish major version 1, we will begin following conventional semver.

---

## Releasing a new version of EDS

_Before the first time you publish_, make sure to:

- set up Two Factor Authentication for your npm account
- run `npm login` in your terminal to generate an access token for publishing

### Publishing steps
We follow a [git-flow](https://nvie.com/posts/a-successful-git-branching-model/) based model, where:
- development happens on `next`
- release branches are cut from `next`. only bugfixes and documentation updates can be added to release branches.
- release branches are merged back into `main` and `next` when ready

#### Cutting a release branch

1. Confirm that all checks are green on CI.
2. Run `git checkout next && git pull origin next` to ensure you have the most up-to-date changes.
3. Run `git checkout -b release-v<version>`
4. Run

```
yarn release

# or, if there are breaking changes
yarn release:breaking
```

We use [standard-version](https://github.com/conventional-changelog/standard-version) to increment the version number in `package.json`, create a git tag for the new release, and update `CHANGELOG.md` based on the commit log. The package is not published, yet. If needed, you can [make changes to the CHANGELOG now](#editing-the-changelog).

5. Push the release branch up, including tags
```
git push --follow-tags origin <branch>
```

#### Merging a release branch
6. Open a pull request for the release branch, merging into **`main`**. Merge the PR through a **merge commit**:
![Screen Shot 2022-05-26 at 10 56 20 AM](https://user-images.githubusercontent.com/15840841/170514789-4f936ba2-c63d-486c-827a-b9e9e86b612e.png)

This is important to ensure `next` and `main` stay in sync!

7. Once that PR is merged, re-open the branch if needed and open another pull request, merging the release branch into **`next`**. Again, merge the PR through a merge commit.

#### Publishing the package
8. Get the most up-to-date version of main: `git checkout main && git pull && yarn build`
9. Publish the package with `npm publish`
10. Communicate the changes via all appropriate channels (if this is a breaking package update that the broader team needs to know about):

- Slack channels
  - #eng-announcements in the Summit Learning workspace
  - #eng-n00bs in the Summit Learning workspace
  - #proj-edu-design-system in the CZI Education workspace
- next EDS newsletter
- next "What's New" update in Zeroheight

#### Alpha release

For testing a release to build confidence.

1. Run `yarn` to ensure all dependencies are upto date.
2. Run `yarn build` to build EDS.
3. Run `yarn release:alpha` to use `standard-version` to create appropriate tags and updates.
4. Run the last command output by `standard-version` as above. It will look something like:

```
git push --follow-tags origin <branch> && npm publish
```

#### Editing the CHANGELOG

1. Run `git log` and note the version tag on the latest (release) commit
2. Make any edits you want to `CHANGELOG.md`
3. Run `git add . && git commit --amend` to update the release commit
4. Remove the tag from the old commit: `git tag -d <version>`
5. Re-tag the release commit: `git tag <version>`
