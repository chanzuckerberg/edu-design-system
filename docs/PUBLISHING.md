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

### Releasing a new version of EDS

_Before the first time you publish_, make sure to:

- set up Two Factor Authentication for your npm account
- run `npm login` in your terminal to generate an access token for publishing

#### Publishing steps

1. Confirm that all checks are green on CI.
2. Run `git checkout main`.
3. Run `yarn` to ensure all dependencies are upto date.
4. Run

```
yarn release

# or, if there are breaking changes
yarn release:breaking
```

We use [standard-version](https://github.com/conventional-changelog/standard-version) to increment the version number in `package.json`, create a git tag for the new release, and update `CHANGELOG.md` based on the commit log. The package is not published, yet. If needed, you can [make changes to the CHANGELOG now](#editing-the-changelog).

5. Run the last command output by `standard-version`. It will look something like:
```
git push --follow-tags origin <branch> && npm publish
```
6. Communicate the changes via all appropriate channels (if this is a breaking package update that the broader team needs to know about):
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
