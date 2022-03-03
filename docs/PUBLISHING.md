## Versioning

EDS uses [SemVer](https://semver.org/) semantic versioning to keep track of ongoing changes to the product. The three types of versions are:

- **Major (X.y.z)** - Major versions contain breaking changes to PetSmart developers builds.
- **Minor (x.Y.z)** - Minor versions add new features or deprecate existing features without breaking changes.
- **Patch (x.y.Z)** - Patch versions fix defects or optimize existing features without breaking changes.

Look to [this helpful document](http://designsystem.morningstar.com/about/versioning.html) from the Morning Star design system for detailed guidance on versioning.

---

### Releasing a new version of EDS

Note: the following steps are not fully baked yet and there's quite a few things to iron out. This is the workflow as it currently stands but is likely going to change.

1. When a new release is coming up, a `release` branch is created from `develop` (i.e. `release-1.1`). In this branch, only bugfixes and metadata commits are permitted in order to prepare for releasing a new version of the design system. Update the changelog to represent changes in latest version.
2. Merge release branch into `main` when the release is ready
3. Run `npm version [major|minor|patch] -m "tag message goes here"` to tag the release. [npm version](https://docs.npmjs.com/cli/version.html) increments the version number in `package.json` in addition to creating a git tag for the new release.
4. Run `git tag -a v[version] -m "tag message goes here"` to tag the design system assets for the new release.
5. Push the changes to the `main` branch.
6. Communicate the changes via all appropriate channels. TODO determine communication strategy for new release
